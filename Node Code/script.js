const express = require('express')
const app = express();

app.get('/' , (req , res) => {
    res.send("<h1>Hello World...</h1>")
})

app.get('/about', (req , res) => {
    res.send("<h1>This is About Page</h1>")
})

app.get('/projects' , (req , res) => {
    res.send("<h1>Hello Projects page</h1>")
})
app.get('/contect' , (req , res) => {
    res.send("<div><h1>This is Contect page</h1><p>Get started with Bootstrap Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes. Get started by including Bootstraps production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this Bootstrap CodePen demo.</p></div>")
})

app.listen(3000 , () => {
    console.log("Server is running on port 3000")
})