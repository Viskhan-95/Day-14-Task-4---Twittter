const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    login: String,
    twitterSave: [{
        ref: "twitterId",
        type: mongoose.SchemaTypes.ObjectId
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;