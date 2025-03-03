import { greeting } from "./app.js"
import { sum , user } from './sum.js'  // desructuring on the fly
import { multiply , username } from './mul.js'

// import { greeting } from "./app.js"
// import { sum , user } from "./sum.js"
// import { multiply , username } from "./mul.js"

greeting()
sum(10 , 20)
console.log(multiply(27 , 90))
console.log(user)
console.log(username)