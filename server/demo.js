const jwt = require("jsonwebtoken");

const userId = 5;

const payload = {
  name: "test",
  password: "pwtest",
  email: "test@test.com",
  userId,
};

const token = jwt.sign(payload, "secret");
console.log(token);
