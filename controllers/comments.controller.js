const Comment = require("../models/Comment.model");

module.exports.commentsController = {
    getCommentByTwiiter: (req, res) => {
        Comment.find({twitterId: req.params.id})
        .then((data) => {
            res.json(data);
        })
    },
    getCommentByUser: (req, res) => {
        Comment.find({userId: req.params.id})
        .then((data) => {
            res.json(data);
        })
    },
    addComment: (req, res) => {
        Comment.create({
            twitterId: req.params.id,
            userId: req.body.userId,
            text: req.body.text
        }).then(() => {
            res.json("Comment added")
        })
    },
    delComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Comment deleted")
        })
    }
}