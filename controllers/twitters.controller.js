const Twitter = require("../models/Twitter.model");

module.exports.twittersController = {
    getTwitters: (req, res) => {
        Twitter.find(). then((data) => {
            res.json(data)
        })
    },
    getTwitterById: (req, res) => {
        Twitter.findById(req.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    addTwitter: (req, res) => {
        Twitter.create({
            userId: req.params.id,
            headTwitter: req.body.headTwitter,
            textTwitter: req.body.textTwitter,
            dateTwitter: req.body.dateTwitter
        }).then(() => {
            res.json("Twitter added")
        })
    },
    delTwitter: (req, res) => {
        Twitter.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("Twitter deleted")
        })
    },
    updateTwitter: (req, res) => {
        Twitter.findByIdAndUpdate(req.params.id, {$set: {
            headTwitter: req.body.headTwitter,
            textTwitter: req.body.textTwitter,
            dateTwitter: req.body.dateTwitter
        }}).then(() => {
            res.json("Twitter updated")
        })
    }
}