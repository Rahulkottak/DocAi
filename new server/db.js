const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
    try {
        await mongoose.connect(process.env.URI, {});
        console.log("DB connection established");
    } catch (error) {
        console.error("Issue in db connection:", error.message);
        process.exit(1);
    }
};

module.exports = db;
