

const fs = require('node:fs');
const crypto = require('node:crypto');

console.log("start execution");

var a = 10004;
var b = 18533;

// password based key derivative function 2
crypto.pbkdf2("password" , "salt" , 500000 , 64 , 'sha512', () => {
    console.log("password encrypted successfully...")
})


function multiplication(a , b) {
    const result = a * b;
    return result;
}

const res = multiplication(a , b)
console.log(res);