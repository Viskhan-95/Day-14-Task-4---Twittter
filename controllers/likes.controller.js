const Twitter = require("../models/Twitter.model");

module.exports.likesController = {
    addLike: (req, res) => {
        Twitter.findByIdAndUpdate(req.params.id, {$push: {
            like: req.body.like}
        }).then((data) => {
            res.json(data);
        })
    }
}