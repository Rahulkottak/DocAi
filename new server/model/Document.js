const mongoose= require('mongoose');

const doc = new mongoose.Schema({
    _id:String,
    data:Object,
    filename: {
        type: String,
        default: "Untitled",
        required: true
    }
})

module.exports = mongoose.model('Document', doc)