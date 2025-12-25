import express from "express"
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();

const server = http.createServer(app);
const io = new Server(server); // handling socket requests
app.use(express.static("public"))

app.get("/" , (req , res) => {
    res.sendFile("/public/index.html")
})
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(3000 , () => {
    console.log("Server is running on port 3000");
})