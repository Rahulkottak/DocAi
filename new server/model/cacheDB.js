const mongoose = require('mongoose');

const Cache = new mongoose.Schema({
    prompt: String,
    answer: String,
    createdAt: {type: Date, expires: "10800m", default: Date.now()}
});

module.exports = mongoose.model("Cache", Cache); 