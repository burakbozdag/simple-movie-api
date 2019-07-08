const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, '`{PATH}` field is required.'],
        maxlength: [15, '`{PATH}` field (`{VALUE}`) must be lower than {MAXLENGTH} characters.'],
        minlength: [1, '`{PATH}` field (`{VALUE}`) must be greater than {MINLENGTH} characters.'],
    },
    category: {
        type: String,
        maxlength: 15,
        minlength: 1,
    },
    country: {
        type: String,
        maxlength: 15,
        minlength: 1,
    },
    year: {
        type: Number,
        max: 3000,
        min: 1000,
    },
    imdb_score: {
        type: Number,
        max: 10,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("movie", MovieSchema);