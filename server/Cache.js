import { Schema, model } from "mongoose";
const Cache = new Schema({
  prompt: String,
  answer: String,
  createdAt: { type: Date, expires: "10800m", default: Date.now },
});

export default model("Cache", Cache);