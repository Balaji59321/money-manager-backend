const express = require("express");
const routes = express.Router();
const userModule = require("./../module/categoryModule");
const config = require("./../config");

routes.post("/create", config.protect, userModule.createCategory);
routes.get("/get", config.protect, userModule.listCategory);
routes.delete("/remove", config.protect, userModule.deleteCategory);

module.exports = routes;
