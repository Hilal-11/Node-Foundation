import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  const [value , setValue] = useState("Mesage From Clinet----Vite----")
  const [loading , setIsLoading] = useState(false)
  const socket = io("http://localhost:3000")
  function connectSocket() {
    socket.on('connecting' , (socket) => {
      console.log('connecting', socket)
    })
    socket.on("message" , (data) => {
      console.log('message', data)
    })
    socket.timeout(5000).emit(
      "client-data",
      value,
      (err, response) => {
        setIsLoading(false);
        if (err) {
          console.log("Timeout or error");
        } else {
          console.log("Server ACK:", response);
        }
      }
    );
  }

  useEffect(() => {
    connectSocket();
  }, [])

  
  return (
    <div>
      <form>

      </form>
    </div>
  )
}

export default App
