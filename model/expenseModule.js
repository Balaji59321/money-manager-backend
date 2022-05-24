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
    ref: "Category",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
expenseSchema.set("timestamps", true);

const expenseModel = mongoose.model("Expense", expenseSchema);

module.exports = expenseModel;
