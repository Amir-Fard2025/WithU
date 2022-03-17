const mongoose = require("mongoose");
const db = require("../config/connection");
const { User, ResourceCard, Tag } = require("../models");
const userSeeds = require("./userSeeds.json");
const resourceSeeds = require("./resourceSeeds.json");
const tags = require("./tagSeeds");

// needs to connect to the database, right?

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds, { validateBeforeSave: true });
    await ResourceCard.deleteMany({});
    await ResourceCard.create(resourceSeeds, { validateBeforeSave: true });
    await Tag.deleteMany({});
    await Tag.create(tags, { validateBeforeSave: true });

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.log("Something went wrong!", err);
  }
});
