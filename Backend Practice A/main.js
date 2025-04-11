
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000
const connectDB = require('./config/database')
const app_routers = require('./routes/app_routers');

app.use(express.json());

app.use("/api/v1" , app_routers)

app.get("/", (req , res) => {
    res.send("<h1>Hello this is backend practice</h1>")
})


app.listen(PORT , () => {
    console.log(`App is running on : ${PORT}`)
})

connectDB();

