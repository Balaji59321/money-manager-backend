const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const userModel = require("./../model/userModel");
const config = require("./../config");
const bcrypt = require("bcrypt");

const signUpUser = asyncHandler(async (req, res, next) => {
  const { email, password, username } = req.body;

  if (!(email && password && username)) {
    res.status(404).send({ message: "Please Enter all the fields" });
  }

  const userExists = await userModel.find({ email });

  if (userExists.length !== 0) {
    res.status(403).send({ message: "Account Already exists please login" });
  }

  const resp = await userModel.create(req.body);

  res.status(201).send({
    email: resp.email,
    password: resp.password,
    username: resp.username,
    token: await config.generateToken(resp._id),
    _id: resp._id,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    res.send(404).send({ message: "Either email or password is missing" });
  }

  const userExists = await userModel.find({ email });

  if (userExists.length === 0) {
    res.status(404).send({ message: "No Matching user found.Please Sign-Up" });
    // throw new Error("No Matching user found.Please Sign-Up");
  }

  const validateUser = await bcrypt.compare(password, userExists[0].password);

  if (!validateUser) {
    res.status(404).send({ message: "Entered password is incorrect" });
  }

  res.status(200).send({
    username: userExists[0].username,
    email: userExists[0].email,
    password: userExists[0].password,
    token: await config.generateToken(userExists[0]._id),
    _id: userExists[0]._id,
  });
});

module.exports = {
  signUpUser,
  loginUser,
};
