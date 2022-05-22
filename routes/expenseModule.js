const express = require("express");
const routes = express.Router();
const expenseModule = require("./../module/expenseModule");
const config = require("./../config");

routes.post("/create", config.protect, expenseModule.addExpense);
routes.put("/update", config.protect, expenseModule.updateExpense);
routes.get("/get", config.protect, expenseModule.getAllExpense);
routes.delete("/delete", config.protect, expenseModule.deleteExpense);

module.exports = routes;
