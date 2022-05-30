const { Router } = require("express");
const { twittersController } = require("../controllers/twitters.controller");

const route = Router();

route.get('/twitters', twittersController.getTwitters);
route.get('/twitter/:id', twittersController.getTwitterById);
route.post('/twitter/add/:id', twittersController.addTwitter);
route.delete('/twitter/delete/:id', twittersController.delTwitter);
route.patch('/twitter/update/:id', twittersController.updateTwitter);

module.exports = route;