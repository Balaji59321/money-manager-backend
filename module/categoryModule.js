const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const categoryModel = require("./../model/categoryModule");
const config = require("./../config");
const bcrypt = require("bcrypt");

const createCategory = asyncHandler(async (req, res) => {
  //   console.log(req);
  const resp = await categoryModel.create({
    name: req.body.name,
    userId: req.userId,
  });
  res.status(201).send(resp);
});

const listCategory = asyncHandler(async (req, res) => {
  const id = req.userId;
  const resp = await categoryModel.find({ id });

  res
    .status(200)
    .send(resp.length === 0 ? { message: "no categories found" } : resp);
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const resp = await categoryModel.findByIdAndDelete(id);
  if (!resp) {
    res.status(404).send({ message: "No Category Found" });
  }
  res.status(200).send(resp);
});

module.exports = {
  createCategory,
  listCategory,
  deleteCategory,
};