const { Schema, model } = require("mongoose");

const resourceCardSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
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
  screenshot: {
    type: String,
    required: false,
  },
  language: {
    type: [String],
    required: true,
  },
  userLikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tags: [
    {
      type: String,
      required: true,
    }
  ],
  tag_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  status: {
    type: String,
    enum: ["published", "unpublished", 'rejected'],
    default: "unpublished",
    required: true
  }
});

const ResourceCard = model("ResourceCard", resourceCardSchema);

module.exports = ResourceCard;
