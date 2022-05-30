const { default: mongoose } = require("mongoose");

const twitterSchema = mongoose.Schema({
    usersId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    likeId: [{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }],
    headTwitter: String,
    textTwitter: String,
    dateTwitter: {
        type: Date,
        default: Date.now
    },
});

const Twitter = mongoose.model("Twitter", twitterSchema);

module.exports = Twitter;