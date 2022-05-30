const { Router } = require("express");
const { twitterSaveController } = require("../controllers/twitterSaves.controller");

const route = Router();

route.post('/twitterSave/add/:id', twitterSaveController.addTwitterSave);

module.exports = route;