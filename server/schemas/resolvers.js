const { User, ResourceCard, Tag } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const generateScreenshot = require("../utils/screenshot");

const resolvers = {
  Query: {
    user: async (parent, arg, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Please login first!");
    },
    resourcesCards: async () => {
      return await ResourceCard.find();
    },
    getSingleCardbyId: async (parent, { _id }, context) => {
      if (context.user) {
        return await ResourceCard.findOne({
          _id,
        });
      }
      throw new AuthenticationError("Please login first!");
    },
    getAllUserCards: async (parent, args, context) => {
      if (context.user) {
        return (
          await User.findOne({ _id: context.user._id }).populate("createdCards")
        ).createdCards;
      }
      throw new AuthenticationError("Please login first!");
    },
    getUnpublishedCards: async (parent, args) => {
      return await ResourceCard.find({
        status: "unpublished",
      });
    },
    getPublishedCardsByTagId: async (parent, args) => {
      return await ResourceCard.find({
        tag_id: { $in: [args.tagId] },
        status: "published",
      });
    },
    getPublishedCardsByTagName: async (parent, { tagName }) => {
      const { resourceCards } = await Tag.find({
        tagName,
      }).populate("resourceCards");

      return resourceCards.filter(
        (resourceCard) => resourceCard.status == "published"
      );
    },
    getPublishedCardsByAllTagNames: async (parent, { tagNamesArray }) => {
      let returnArray = [];
      let ids = [];

      for (let tagName of tagNamesArray) {
        const { resourceCards } = await Tag.findOne({
          tagName,
        }).populate("resourceCards");
        const publishedArray = resourceCards.filter(
          (resourceCard) =>
            resourceCard.status == "published" &&
            !ids.includes(resourceCard._id.toString())
        );
        returnArray = [...returnArray, ...publishedArray];
        ids = returnArray.map((entry) => entry._id.toString());
        console.log(ids);
      }

      console.log("return array: ", returnArray);
      return returnArray;
    },

    getAllTags: async (parent, args) => {
      return await Tag.find();
    },
    getAllCardsByStatus: async (parent, args) => {
      const { status } = args;
      return await ResourceCard.find({
        status
      })
    },
    getAllUserCreatedCards: async (parent, args, context) => {
      // if (context.user) {
        // const _id = context.user._id;
        const _id = "623df616efa280cf90a63466"
        console.log("id: ",_id)
        const { createdCards } = await User.findOne({ _id })
          .populate("createdCards");
        return createdCards
      // }
      throw new AuthenticationError("Please login first!");
    },

    getAllUserLikedCards: async (parent, args, context) => {
      // if (context.user) {
        // const _id = context.user._id;
        const _id = "623df616efa280cf90a63466";
        console.log(_id)
        const { likedCards } = await User.findOne({ _id })
          .populate("likedCards");
        return likedCards
      // }
      throw new AuthenticationError("Please login first!");
    },


  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError(`Can't find this user`);
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError(`Wrong password!`);
      }
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { email, password }) => {
      const user = await User.create({
        email,
        password,
      });
      if (!user) {
        console.log("Error in adding a user");
        return { message: "Something is wrong!" };
      }

      const token = signToken(user);
      return { token, user };
    },

    addResourcesCard: async (parent, args, context) => {
      if (context.user) {
        const { resourceId, title, description, url, language, tag_id } =
          args.resource;
        try {
          let screenshot;
          try {
            const screenshotName = title.toLowerCase().replace(" ", "");
            generateScreenshot(
              url,
              "public/screenshots/" + screenshotName + ".png"
            );
            screenshot = `/screenshots/${screenshotName}.png`;
          } catch (err) {
            console.log("Error while generating a screenshot");
            screenshot = `/default.png`;
          }
          const addCard = await ResourceCard.create({
            resourceId,
            title,
            description,
            url,
            screenshot,
            language,
            tag_id,
          });
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { createdCards: addCard._id } }
          );
          return true;
        } catch (err) {
          console.error(err.message);
          return false;
        }
      }
      throw new AuthenticationError("Please login first!");
    },

    updateResourcesCard: async (parent, args, context) => {
      if (context.user) {
        const { _id, resourceId, title, description, url, language, tag_id } =
          args.resource;
        try {
          const updatedCard = await ResourceCard.findOneAndUpdate(
            { _id },
            { $set: { resourceId, title, description, url, language, tag_id } },
            { new: true }
          );
          return true;
        } catch (err) {
          return resolvers.status(400).json(err);
        }
      }
      throw new AuthenticationError("Please login first!");
    },

    deleteResourcesCard: async (parent, { cardId }, context) => {
      if (context.user) {
        try {
          const deleteCard = await ResourceCard.findOneAndDelete({
            _id: cardId,
          });
          return true;
        } catch (err) {
          return resolvers.status(400).json(err);
        }
      }
      throw new AuthenticationError("Please login first!");
    },

    toggleLikeResourcesCard: async (parent, { cardId }, context) => {
      if (context.user) {
        const userId = context.user._id;
        try {
          const resourceCard = await ResourceCard.findOne({
            _id: cardId,
          });
          const resourceCardUserLikesIdsStrings = resourceCard.userLikes.map(
            (obj) => obj.toString()
          );
          if (resourceCardUserLikesIdsStrings.includes(userId)) {
            console.log("unlike");
            await ResourceCard.findOneAndUpdate(
              { _id: cardId },
              { $pull: { userLikes: userId } }
            );
            await User.findOneAndUpdate(
              { _id: userId },
              { $pull: { likedCards: cardId } }
            );
            return true;
          } else {
            console.log("like");
            await ResourceCard.findOneAndUpdate(
              { _id: cardId },
              { $addToSet: { userLikes: userId } }
            );
            await User.findOneAndUpdate(
              { _id: userId },
              { $addToSet: { likedCards: cardId } }
            );
            return true;
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      throw new AuthenticationError("Please login first!");
    },
  },
};

module.exports = resolvers;
