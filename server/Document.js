import { Schema , model } from "mongoose"
const Document = new Schema({
    _id:String,
    data:Object,
    filename:{
        type:String,
        default:"Untitled",
        required:true
    }
})

export default model("Document",Document)