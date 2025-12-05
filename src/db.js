const mongoose = require("mongoose");

async function linkDB() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(">> Database linked successfully.");
    } catch (err) {
        console.log("DB connection issue:", err.message);
    }
}

module.exports = linkDB;
