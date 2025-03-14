

const fs = require('node:fs');
const https = require('https');

console.log("start execution");

var a = 10004;
var b = 18533;
  
https.get('https://jsonplaceholder.typicode.com/todos/1' , (res) => {
    console.log("fetch data from server duccessfully...")
})

setTimeout(() => {
    console.log("timeout function executed")
} , 5000)

    // synchronous way (it block the main thread)
// fs.readFileSync("./test.txt", "utf-8" , (err , filedata) => {
//     console.log("File data = ",filedata);
// })

fs.readFile("./test.txt", "utf-8" , (err , filedata) => {
    console.log("File data = ",filedata);
})

function multiplication(a , b) {
    const result = a * b;
    return result;
}

const res = multiplication(a , b)
console.log(res);