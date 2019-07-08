const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect("mongodb+srv://admin:7h763FyC34@simple-movie-api-ve21h.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
    mongoose.connection.on("open", () => {
        console.log("MongoDB connected.");
    });
    mongoose.connection.on("error", (err) => {
        console.log("MongoDB error: ", err);
    });

    mongoose.Promise = global.Promise;
};