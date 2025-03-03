const greeting = require("./app.js")
const {sum , user} = require('./sum.js');  // desructuring on the fly
const multiply = require('./mul.js')

greeting()
sum(10 , 20)
console.log(multiply(27 , 90))
console.log(user)