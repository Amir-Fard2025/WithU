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

// const prepareResourceSeeds = (resourceSeeds, newTags) => {
//   return resourceSeeds.map((rs) => {
//     return { ...rs, tag_id: [newTags[generateRandom(0, tags.length - 1)]._id] };
//   });
// };
const addNewEntriesToSeeds = (parentSeeds, newChildEntries, field) => {
  return parentSeeds.map((parentSeed) => {
    let addedEntriesObj = {};
    addedEntriesObj[field] = [newChildEntries[generateRandom(0, tags.length - 1)]._id];
    return { ...parentSeed, ...addedEntriesObj };
  });
};

const addCardsToTags = async (tagSeeds, cardSeeds) => {
  tagSeeds.forEach(async tagSeed => {
    const _id = tagSeed._id;
    cardSeeds.forEach(async cardSeed => {
      if (cardSeed.tag_id.includes(_id)) {
        const cardSeeId = cardSeed._id
        await Tag.findOneAndUpdate({ _id }, { $push: { resourceCards: cardSeeId } })
      }
    })
  })
}

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Tag.deleteMany({});
    const newTags = await Tag.create(tags, { validateBeforeSave: true });
    await ResourceCard.deleteMany({});
    const updatedResourceSeeds = addNewEntriesToSeeds(resourceSeeds, newTags, "tag_id");
    const newCards = await ResourceCard.create(updatedResourceSeeds, {
      validateBeforeSave: true,
    });
    await addCardsToTags(newTags, newCards);
    const updatedUserSeedsCreatedCards = addNewEntriesToSeeds(userSeeds, newCards, "createdCards");
    const updatedUserSeedsLikedCards = addNewEntriesToSeeds(updatedUserSeedsCreatedCards, newCards, "likedCards");
    await User.create(updatedUserSeedsLikedCards, { validateBeforeSave: true });
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.log("Something went wrong!", err);
  }
});
