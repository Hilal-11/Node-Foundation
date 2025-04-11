
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000


app.use(express.json());

app.get('/', (req , res) => {
    res.send("<h1>Hello this is backend practice</h1>")
})


app.listen(PORT , ()=> {
    console.log(`App is running on : ${PORT}`)
})

