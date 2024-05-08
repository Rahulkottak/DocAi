const doc = require('../model/Document');

exports.findDoc = async(id) => {
    const document = await doc.findById(id);
    if(document) return document;
    const doc1 = await doc.create({_id: id, date: Date.now()});
    return doc1;
}