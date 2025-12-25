import http from "http"
import { Server } from "socket.io"

const httpServer = http.createServer()
const server = new Server(httpServer , {
    cors: {
          cors: {
            origin: ["http://127.0.0.1:5500"],
            credentials: true
          }
    }
});

server.on("connection", (socket) => {
    socket.on("client-message" , (msg) => {
        console.log(msg)
    })
    socket.emit("message" , "Hello socket.io")
})


server.listen(3000 , () => {
    console.log("Server is running on port 3000");
})