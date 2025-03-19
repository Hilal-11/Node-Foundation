
const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require("./config/database")
const PORT = process.env.PORT || 4000;

const todoRoutes = require("./routes/todos")

// middleware to parse body data
app.use(express.json());

app.get('/' , (req , res) => {
    res.send("<h1>This is my Home route of Express application</h1>");
})


app.use("/api/v1" , todoRoutes)

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})

connectDB();