const User = require("../models/User.model");

module.exports.usersController = {
    getUsersById: (req, res) => {
        User.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getUsers: (req, res) => {
        User.find().then((data) => {
            res.json(data)
        })
    },
    addUser: (req, res) => {
        User.create({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            login: req.body.login
        }).then(() => {
            res.json("User added")
        })
    },
    delUser: (req, res) => {
        User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json("User deleted")
        })
    },
    updateUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {$set: {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            login: req.body.login
        }})
        .then(() => {
            res.json("User updated")
        })
    }
}