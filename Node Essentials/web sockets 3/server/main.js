import http from "http"
import { Server } from "socket.io"

const httpServer = http.createServer()
const server = new Server(httpServer , {
    cors: {
          cors: {
            origin: ["http://localhost:5173/"],
            methods: ["GET", "POST"],
            credentials: true
          }
    }
});

server.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("client-data", (data) => {
        console.log("Received from client:", data);
    });
    socket.emit("message" , {name: "Hilal" , work: "Node developer"})
})

server.listen(3000 , () => {
    console.log("Server is running on port 3000");
})