import http from "node:http"
import fs from "node:fs"

// const server = http.createServer((req , res) => {
//     console.log(req)
//     console.log("Request received");

//     if(req.url == '/about') {
//         res.end("Wel come to about page")
//     }else if(req.url == '/contact') {
//         res.end("Wel come to contact page")
//     }else if(req.url == '/services') {
//         res.end("Wel come to services page")
//     }
   
//     res.end("Wel come to Node js")
// })

// const server = http.createServer((req , res) => {
//     const ip = req.socket.remoteAddress;
//     const port = req.socket.remoteAddress;

//     fs.appendFile('./logs.txt' , `Request from ${ip}: ${port}------${Date.now()}\n` , (err) => {
//         if(err) {
//             console.log(err.message)
//         }else{
//             console.log("Request logged successfully");
//         }
//     })

//     res.end("Wel come to Node js")
// })



// server.listen(3000 , () => {
//     console.log("Server is running on port 3000");
// })


// setTimeout(() => {
//     server.close( () => {
//         console.log("Server is closed");
//     })
    
// },10000)



// const server = http.createServer({ keepAliveTimeout: 60000} , (req , res) => {
//     res.writeHead(200 , { 'Content-Type': 'application/json'});
//     res.end(JSON.stringify({
//         name: "Hilal",
//         role: "Developer"
//     }))
// })  

// server.listen(3000 , () => {
//     console.log("Server is running on port 3000");
// })

// setTimeout(() => {
//     server.close(() => {
//         console.log("Server is closed");
//     })
//     server.closeAllConnections();
// }, 10000)



// Socket

// const server = http.createServer((req , res) => {
//     console.log(req.socket)
// })

// server.listen(3000 , () => {
//     console.log("Server is running on port 3000");
// })