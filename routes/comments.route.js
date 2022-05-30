const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller")

const route = Router();

route.get('/comments/user/:id', commentsController.getCommentByUser);
route.get('/comments/twitter/:id', commentsController.getCommentByTwiiter);
route.post('/comment/add/:id', commentsController.addComment);
route.delete('/comment/delete/:id', commentsController.delComment);

module.exports = route;