const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  expenseFor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
expenseSchema.set("timestamps", true);

const expenseModel = mongoose.model("expense", expenseSchema);

module.exports = expenseModel;
