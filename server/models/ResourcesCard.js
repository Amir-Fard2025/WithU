const { Schema, model } = require("mongoose");

const resourceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 25,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 120,
    trim: true,
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
