const mongoose = require("mongoose");
const tags = [
  {
    _id: mongoose.Types.ObjectId(),
    tagName: "medical",
  },
  {
    _id: mongoose.Types.ObjectId(),
    tagName: "stay",
  },
  {
    _id: mongoose.Types.ObjectId(),
    tagName: "transport",
  },
  {
    _id: mongoose.Types.ObjectId(),
    tagName: "animal",
  },
  {
    _id: mongoose.Types.ObjectId(),
    tagName: "legal",
  },
];

module.export = tags;
