
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000

app.get("/" , (req , res) => {
    res.send("<h1>Wel come frontend and backend</h1>")
})

app.get("/api/jokes", (req , res) => {
    const jokes = [
        { id: 1, title: "Why don't scientists trust atoms?", joke: "Because they make up everything!" },
        { id: 2, title: "Why did the scarecrow win an award?", joke: "Because he was outstanding in his field!" },
        { id: 3, title: "Why don't skeletons fight each other?", joke: "They don't have the guts." },
        { id: 4, title: "What do you call fake spaghetti?", joke: "An impasta!" },
        { id: 5, title: "Why did the bicycle fall over?", joke: "Because it was two-tired!" },
        { id: 6, title: "What do you call cheese that isn't yours?", joke: "Nacho cheese!" },
        { id: 7, title: "Why couldn't the leopard play hide and seek?", joke: "Because he was always spotted." },
        { id: 8, title: "What do you call a bear with no teeth?", joke: "A gummy bear!" },
        { id: 9, title: "Why did the golfer bring two pairs of pants?", joke: "In case he got a hole in one." },
        { id: 10, title: "Why don't eggs tell jokes?", joke: "Because they'd crack each other up!" },
    ]
    res.send(jokes)
})

app.listen(PORT , () => {
    console.log(`app is running on port ${PORT}`)
})