"use strict";
const add1 = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const result1 = add(6, 8);
console.log(result1);
