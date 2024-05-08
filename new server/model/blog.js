const mongoose = require('mongoose');

const blog = new mongoose.Schema({
    docId: String,
    title: String,
    author: String,
});

module.exports = mongoose.model("blog", blog); 