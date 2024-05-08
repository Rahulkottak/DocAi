import mongoose from "mongoose";
import dotenv from "dotenv"

// require("dotenv").config()
dotenv.config();

export default function db () {
    mongoose.connect(process.env.URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log("DB not connected");
        process.exit(1);
    })
}

// export default db;