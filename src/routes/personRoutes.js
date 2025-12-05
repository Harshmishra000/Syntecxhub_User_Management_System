const express = require("express");
const routes = express.Router();
const h = require("../handlers/personHandler");
const tokenCheck = require("../middle/tokenCheck");

routes.post("/signup", h.register);
routes.post("/signin", h.login);

routes.get("/me", tokenCheck, h.myInfo);
routes.put("/update", tokenCheck, h.updateMe);
routes.delete("/remove", tokenCheck, h.removeMe);

module.exports = routes;
