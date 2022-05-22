const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const expenseModel = require("./../model/expenseModule");
const categoryModel = require("./../model/categoryModule");
const config = require("./../config");
const bcrypt = require("bcryptjs");

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

  const resp = await expenseModel.findByIdAndUpdate(data._id, data);
  if (resp.length === 0) {
    res.status(200).send({ message: "No record found" });
  }

  res.status(200).send(resp);
});

const getAllExpense = asyncHandler(async (req, res) => {
  const { userId } = req;
  if (!userId) res.status(404).send({ message: "No user found" });

  const resp = await expenseModel.find({ userId });
  const temp = [...resp];

  let func1 = async () => {
    return await categoryModel.findById(temp[i]["categoryId"])["name"];
  };

  for (i in resp) {
    const test = async () => {
      if (temp[i]["categoryId"]) {
        let out = await func1();
        console.log(out);
        temp[i]["categoryName"] = out;
      }
    };
    test();
    console.log(temp);
  }

  // console.log(temp);

  if (resp.length === 0) {
    res.status(200).send({ message: "No record found" });
  }

  res.status(200).send(temp);
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
