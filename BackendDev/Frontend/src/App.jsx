import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes , setJokes] = useState([])
  useEffect(() => {
    // http://localhost:3000/jokes
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error.message)
      console.log("Data fetched failed ! sorry")
    })
  },[])


  return (
    <div>
      <h1>Jokes App</h1>
      <div>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((joke , index) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default App