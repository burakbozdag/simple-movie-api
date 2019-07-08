const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 100,
    },
});

module.exports = mongoose.model("user", UserSchema);