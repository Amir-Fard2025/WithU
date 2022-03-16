const { User, ResourcesCard } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, arg, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Please login first!");
    },
    resourcesCards: async () => {
      return await ResourcesCard.find();
    },
    getSingleCardbyId: async (parent, { _id }, context) => {
      if (context.user) {
        return await ResourcesCard.findOne({
          _id,
        });
      }
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
        const { resourceId, title, description, url, language } = args.resource;
        try {
          const addCard = await ResourcesCard.create({
            resourceId,
            title,
            description,
            url,
            language,
          });
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
        const { resourceId, title, description, url, language } = args.resource;
        try {
          const updatedCard = await ResourcesCard.findOneAndUpdate(
            // take the _id dynamically from context

            { _id: "622f85e57137ed6dac431a36" },
            { $set: { resourceId, title, description, url, language } },
            { new: true }
          );
          // return { updatedCard };
          return true;
        } catch (err) {
          return resolvers.status(400).json(err);
        }
      }
      throw new AuthenticationError("Please login first!");
    },

    // Here I need to extract the toket first to ensure user is allowed to delete a card;
    deleteResourcesCard: async (parent, { cardId }, context) => {
      if (context.user) {
        try {
          const deleteCard = await ResourcesCard.findOneAndDelete({
            _id: cardId,
          });
          return true;
        } catch (err) {
          return resolvers.status(400).json(err);
        }
      }
      throw new AuthenticationError("Please login first!");
    },

    canLikeResourcesCard: async (parent, { cardId }, context) => {
      if (context.user) {
        try {
          const resourceCard = await ResourcesCard.findOne({
            _id: cardId,
          });
          if (resourceCard.like.includes(context.user._id)) {
            console.log("unlike");
            return true;
          } else {
            console.log("like");
            return false;
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      throw new AuthenticationError("Please login first!");
    },
    likeResourcesCard: async (parent, arg, context) => {
      if (context.user) {
        try {
          const resourceCard = await ResourcesCard.findOneAndUpdate(
            { _id: arg.cardId },
            { $addToSet: { like: context.user._id } }
          );
          console.log(resourceCard);
          return true;
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
