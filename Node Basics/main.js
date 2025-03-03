const {message ,greeting} = require("./app.js")
const {sum , user} = require('./sum.js');  // desructuring on the fly
const multiply = require('./mul.js')
const { matrices , matricesTranspose } = require('./Module')
greeting()
sum(10 , 20)
console.log(multiply(27 , 90))
console.log(user)
console.log(message)

const matrix = [
    [10 , 20 , 30 , 90],
    [66 , 88 , 40 , 43],
    [19 , 21 , 50 , 44],
    [11 , 83 , 10 , 47]
]

matrices(matrix)
matricesTranspose(matrix)
// console.log(module.exports)      //module.exports is an empty object