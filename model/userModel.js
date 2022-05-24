const mongoose = require("mongoose");
const brcypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.pre("save", async function () {
  const salt = await brcypt.genSalt(10);
  this.password = await brcypt.hash(this.password, salt);
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
