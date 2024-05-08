import Document from "../Document.js";
export default async function findOrCreateDocument(id) {
    const document = await Document.findById(id);
    if (document) return document;
    const doc = await Document.create({ _id: id, data: "" });
    return doc;
  }