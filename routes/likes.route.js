const { Router } = require("express");
const { likesController } = require("../controllers/likes.controller");

const route = Router();

route.post('like/add/:id', likesController.addLike);

module.exports = route;