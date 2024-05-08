import express from "express";
import cors from "cors";
import botRouter from "./Routes/Bot.js";
import { Server } from "socket.io";
import { createServer } from "http";
import Document from "./Document.js";
import findOrCreateDocument from "./Services/findorCreateDocument.js";
import blogRouter from "./Routes/BlogRoute.js";
import db from "./db.js";

// const db=require('db')

const app = express();
const httpServer = createServer(app);
const port = 5000;
const io = new Server(httpServer, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await findOrCreateDocument(documentId);
    const data = document.data;
    const filename = document.filename
    socket.join(documentId);
    socket.emit("load-document", data , filename);

    // nested the event inside this event so that document id is also accessible
    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta); // sending data to a particular room
    });

    // filename change event
    socket.on("send-filename",(filename)=>{
      socket.broadcast.to(documentId).emit("receive-filename",filename);
    })

    socket.on("save-document", async (fileRecord) => {
      const {data,filename} = fileRecord;
      await Document.findByIdAndUpdate(documentId, { data:data , filename:filename });
    });
  });
});

app.use("/bot", botRouter);
app.use("/blog", blogRouter);

httpServer.listen(port,() => {
  db();
  console.log(`App listening on http://localhost:${port}`);
});