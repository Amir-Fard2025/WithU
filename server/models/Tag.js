const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  tagName: {
    type: String,
    required: true,
    unique: true,
  },
  resourcesCards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ResourceCard'
    }
  ]
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
