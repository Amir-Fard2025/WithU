const { User, ResourcesCard } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Please login first!");
    },
  },
  Mutation: {
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ email: args.email }],
      });
      if (!user) {
        return { message: "Can't find this user" };
      }
      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        return { message: "Wrong password!" };
      }
      // retrieve the token
      const token = signToken({
        _id: user.id,
        username: user.username,
        email: user.email,
      });
      return { user, token };
    },
    adduser: async (parent, args) => {
      console.log(args);
      const user = await User.create({
        username: args.username,
        email: args.email,
        password: args.password,
      });
      if (!user) {
        console.log("Error in adding a user");
        return { message: "Something is wrong!" };
      }
      // retrieve the token
      const token = signToken({
        id: user.id,
        username: user.username,
        email: user.email,
        password: user.password,
      });
      return { token, user };
    },

    addResourcesCard: async (parent, args) => {
      console.log(args.resource);
      const { resourceId, title, description, url, language } = args.resource;
      try {
        const addCard = await ResourcesCard.create({
          title,
          description,
          url,
          language,
        });
        return { addCard };
      } catch (err) {
        console.error(err.message);
      }
    },
    updateResourcesCard: async (parent, args) => {
      console.log(args.resource);
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
    },
    deleteResourcesCard: async (parent, { cardId }) => {
      try {
        const deleteCard = await ResourcesCard.findOneAndDelete({
          _id: cardId,
        });
        return true;
      } catch (err) {
        return resolvers.status(400).json(err);
      }
    },
    likeResourcesCard: async (parent, { cardId }) => {
      try {
        const resourceCard = await resource.findOne({
          // take the _id dynamically from context

          _id: cardId,
        });
        if (resourceCard.like.includes(userId)) {
          console.log("unlike");
        } else {
          console.log("like");
        }
      } catch (err) {}
    },
  },
};

module.exports = resolvers;
