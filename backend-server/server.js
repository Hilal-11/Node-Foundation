
const express = require('express'); 

const app = express();
const bodyParser = require('body-parser')


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


app.listen(3000 , () => {
    console.log('Server is running on port 3000');  
}) 