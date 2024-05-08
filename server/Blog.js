import { Schema , model } from "mongoose"
const Blog = new Schema({
    docId:String,//this is the key for the document data
    title:String,
    author:String,
})

export default model("Blog",Blog)