const { Router } = require("express");

const route = Router();

route.use(require("./comments.route"));
route.use(require("./likes.route"));
route.use(require("./twitters.route"));
route.use(require("./twitterSaves.route"));
route.use(require("./users.route"));

module.exports = route;