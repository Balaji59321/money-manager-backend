const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const expenseModel = require("./../model/expenseModule");
const categoryModel = require("./../model/categoryModule");
const config = require("./../config");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const addExpense = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { title, amount, type, expenseFor } = req.body;
  if (!(title && amount && type && expenseFor)) {
    res.status(404).send({
      message: "Please enter all the fields",
    });
  }

  const resp = await expenseModel.create({
    ...req.body,
    userId: req.userId,
  });

  if (!resp._id)
    res.status(404).send({
      message: "Error on Creation",
    });

  res.status(201).send(resp);
});

const updateExpense = asyncHandler(async (req, res) => {
  const data = req.body;

  console.log("hello");
  console.log(data["createdAt"]);

  const dateCompare = moment().diff(
    moment(data["createdAt"], "DD/MM/YYYY HH:mm:ss")
  );
  console.log(dateCompare);

  const resp = await expenseModel.findByIdAndUpdate(data._id, data);
  if (resp.length === 0) {
    res.status(200).send({ message: "No record found" });
  }

  res.status(200).send(resp);
});

const getAllExpense = asyncHandler(async (req, res) => {
  const { userId } = req;
  if (!userId) res.status(404).send({ message: "No user found" });

  const resp = await expenseModel.find({ userId }).populate("categoryId");
  console.log(resp);

  if (resp.length === 0) {
    res.status(200).send({ message: "No record found" });
  }

  res.status(200).send(resp);
});
const deleteExpense = asyncHandler(async (req, res) => {
  const { expenseId } = req.body;

  const resp = await expenseModel.findByIdAndDelete(expenseId);
  console.log(resp);
  if (!resp) {
    res.status(404).send({ message: "No Expense Found" });
  }
  res.status(200).send(resp);
});

module.exports = {
  addExpense,
  updateExpense,
  getAllExpense,
  deleteExpense,
};
