const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// use to parse rwq.body data
app.use(bodyParser.json())

app.get('/', (req , res) => {
    res.send('<h1>Server creation using express in Node js</h1>');
})

app.post('/profile/user' , (req , res) => {
    const { username , password} = req.body;
    console.log(username);
    console.log(password);
    res.send( "User created successfully");
})


mongoose.connect('mongodb://localhost:27017/myUsers' , {
    useNewUrlParser :true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Express to MongoDB connection seccessfully...")
}).catch((error) => {
    console.log(error+" conection failed some internal issue !!!");
})

app.listen(3000 , () => {
    console.log('Server is running on port 3000');  
}) 