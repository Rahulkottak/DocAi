const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const db = require('./db');
const { Server } = require('socket.io');
const {findDoc} = require('./services/findDoc');
const app = express();
require("dotenv").config();
const BlogRoutes = require("./Routes/BlogRoute");
const botRoutes = require("./Routes/bot");
const Document = require("./model/Document")


app.use(express.json());

const httpServer=createServer(app);
const port = 3000;

const io=new Server(httpServer, {cors: {origin: "*" } });
app.use(cors());

io.on("connection", (socket)=>{
    socket.on("get-document", async (documentId)=>{
        const document = await findDoc(documentId);
        const data = document.data;
        const filename=document.filename;
        socket.join(documentId);
        socket.emit("load-document", data, filename);
        
        socket.on("send-changes", (delta)=>{
            socket.broadcast.to(documentId).emit("receive-changes", delta);
        });

        socket.on("send-filename", (filename)=>{
            socket.broadcast.to(documentId).emit("receive-filename", filename);
        })
        
        socket.on("save-document", async(fileRecord)=>{
            const {data, filename} = fileRecord;
            await Document.findByIdAndUpdate(documentId, {data: data, filename: filename})
        });
    });
})

app.use('/', botRoutes);
app.use('/blog', BlogRoutes);


httpServer.listen(port,() => {
    db();
    console.log(`${port}`);
})