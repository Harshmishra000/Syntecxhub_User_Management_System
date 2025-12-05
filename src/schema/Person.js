const mongoose = require("mongoose");

const personLayout = new mongoose.Schema({
    username: { type: String, required: true },
    contactMail: { type: String, required: true, unique: true },
    secret: { type: String, required: true }, 
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Person", personLayout);
