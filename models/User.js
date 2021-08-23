const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  surname: String,
  username: String,
  password: String,
});

module.exports = mongoose.model("Users", UserSchema, "users");
