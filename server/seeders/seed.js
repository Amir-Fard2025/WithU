const mongoose = require("mongoose");
const db = require("../config/connection");
const { User, ResourcesCard } = require("../models");
const userSeeds = require("./userSeeds.json");
const resourceSeeds = require("./resourceSeeds.json");

// needs to connect to the database, right?

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds, { validateBeforeSave: true });
    await ResourcesCard.deleteMany({});
    await ResourcesCard.create(resourceSeeds, { validateBeforeSave: true });

    console.log("all done!");
    process.exit(0);
    // is this correct?
  } catch (err) {
    throw `Something went wrong!`;
  }
});
