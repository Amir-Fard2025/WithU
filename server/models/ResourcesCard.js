const { Schema, model } = require("mongoose");

const resourceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  language: {
    type: [String],
    required: true,
  },
  like: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const ResourceCard = model("ResourceCard", resourceCardSchema);

module.exports = ResourceCard;
