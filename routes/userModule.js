const express = require("express");
const routes = express.Router();
const userModule = require("./../module/userModule");

routes.post("/signup", userModule.signUpUser);
routes.post("/login", userModule.loginUser);

module.exports = routes;
