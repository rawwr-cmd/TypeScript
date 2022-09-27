"use strict";
const add = (a, b, showResult, message) => {
    // if (typeof a !== "number" || typeof b !== "number") {
    //   throw new Error("a and b must be numbers");
    // }  //using js
    const result = a + b;
    if (showResult) {
        console.log(`${message} ${result}`);
    }
    else {
        return result;
    }
};
// let num1: number;
// num1 = 5;
const num1 = 10;
const num2 = 20;
const printResult = true;
const resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
