const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    surname: {
        type: String,
        maxlength: 50,
    },
    bio: {
        type: String,
        maxlength: 500,
        minlength: 2,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("director", DirectorSchema);