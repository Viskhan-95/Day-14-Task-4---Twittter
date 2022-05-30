const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const route = Router();

route.get('/users', usersController.getUsers);
route.get('/user/:id', usersController.getUsersById);
route.post('/user/add', usersController.addUser);
route.delete('/user/del/:id', usersController.delUser);
route.patch('/user/update/:id', usersController.updateUser);

module.exports = route;