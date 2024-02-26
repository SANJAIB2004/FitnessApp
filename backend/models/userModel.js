const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPassword });
  return user;
};

module.exports = mongoose.model("User", userSchema);