const User = require("../models/User.model");

module.exports.twitterSaveController = {
    addTwitterSave: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {$push: {
            twitterSave: req.body.twitterSave
        }}).then(() => {
            res.json("Twitter save")
        })
    }
}