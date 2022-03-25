const mongoose = require("mongoose");
const db = require("../config/connection");
const { User, ResourceCard, Tag } = require("../models");
const userSeeds = require("./userSeeds.json");
const resourceSeeds = require("./resourceSeeds.json");
const tagSeeds = require("./tagSeeds.json");
const CARD_PER_USER = 6;
const generateScreenshot = require("../utils/screenshot.js");

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

const addNewEntriesToSeeds = (
  parentSeeds,
  newChildEntries,
  field,
  childDuplicationBool
) => {
  let newChildEntriesArray = [...newChildEntries];
  return parentSeeds.map((parentSeed) => {
    let addedEntriesObj = {};
    addedEntriesObj[field] = [];

    let counter = 0;

    while (newChildEntriesArray.length != 0 && counter < CARD_PER_USER) {
      const i = generateRandom(0, newChildEntriesArray.length - 1);
      const childEntry = newChildEntriesArray[i];
      addedEntriesObj[field].push(childEntry);
      if (childDuplicationBool) {
        delete newChildEntriesArray[i];
        newChildEntriesArray = newChildEntriesArray.filter(
          (entry) => entry !== undefined
        );
      }
      counter++;
    }
    return { ...parentSeed, ...addedEntriesObj };
  });
};

const addCardsToTagsAndTagsToCards = async (newTags, newCards) => {
  const newTagsIdsByName = {};
  newTags.forEach((tagObj) => {
    newTagsIdsByName[tagObj.tagName] = tagObj._id;
  });
  //Itirate over each card to check the tags in eachCard
  newCards.forEach(async (card) => {
    const cardId = card._id;
    let tagIdArr = [];
    card.tags.forEach(async (tagName) => {
      const tagId = newTagsIdsByName[tagName];
      if (tagIdArr.includes(tagId.toString())) return;
      await Tag.findOneAndUpdate(
        { tagName },
        { $push: { resourceCards: cardId } }
      );
      tagIdArr.push(tagId.toString());
    });
    if (tagIdArr.length == 0) return;
    await ResourceCard.findOneAndUpdate(
      { _id: cardId },
      { $addToSet: { tag_id: { $each: tagIdArr } } }
    );
    tagIdArr = [];
  });
};

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Tag.deleteMany({});
    await ResourceCard.deleteMany({});
    const newTags = await Tag.create(tagSeeds, { validateBeforeSave: true });
    const newCards = await ResourceCard.create(
      resourceSeeds.map((card) => {
        const screenshotName = card.title.toLowerCase().replace(" ", "");
        generateScreenshot(
          card.url,
          "public/screenshots/" + screenshotName + ".png"
        );
        card.screenshot = `/screenshots/${screenshotName}.png`;
      }),

      { validateBeforeSave: true }
    );

    await addCardsToTagsAndTagsToCards(newTags, newCards);

    const updatedUserSeedsCreatedCards = addNewEntriesToSeeds(
      userSeeds,
      newCards,
      "createdCards",
      true
    );
    const updatedUserSeedsLikedCards = addNewEntriesToSeeds(
      updatedUserSeedsCreatedCards,
      newCards,
      "likedCards",
      false
    );
    await User.create(updatedUserSeedsLikedCards, { validateBeforeSave: true });
    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.log("Something went wrong!", err);
  }
});
