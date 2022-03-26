const mongoose = require("mongoose");

const DB_NAME = "withu_db";

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

module.exports = mongoose.connection;
