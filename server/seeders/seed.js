const mongoose = require("mongoose");
const db = require("../config/connection");
const { User, ResourceCard, Tag } = require("../models");
const userSeeds = require("./userSeeds.json");
const resourceSeeds = require("./resourceSeeds.json");
const tags = require("./tagSeeds.json");

// needs to connect to the database, right?
const generateRandom = (min, max) => {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
};

const prepareResourceSeeds = (resourceSeeds, newTags) => {
  return resourceSeeds.map((rs) => {
    return { ...rs, tag_id: [newTags[generateRandom(0, tags.length - 1)]._id] };
  });
};

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds, { validateBeforeSave: true });
    await Tag.deleteMany({});
    const newTags = await Tag.create(tags, { validateBeforeSave: true });
    await ResourceCard.deleteMany({});
    const updatedResourceSeeds = prepareResourceSeeds(resourceSeeds, newTags);
    const newCards = await ResourceCard.create(updatedResourceSeeds, {
      validateBeforeSave: true,
    });
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.log("Something went wrong!", err);
  }
});
