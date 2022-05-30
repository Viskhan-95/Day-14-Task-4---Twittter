const { default : mongoose } = require("mongoose");

const commentSchema = mongoose.Schema({
    twitterId: {
        ref: "Twitter",
        type: mongoose.SchemaTypes.ObjectId
    },
    userId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    text: String
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;