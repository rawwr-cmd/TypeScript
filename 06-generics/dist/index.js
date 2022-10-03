"use strict";
const names = ["Alice", "Bob", "Eve"]; //same as string[]
names[0].split(" ");
// names[0] = 9; // Error!
// console.log(names);
//promise knows which data it returns
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is done!");
        resolve(10);
    }, 2000);
});
promise.then((data) => {
    //   data.split(" ");
});
// creating a generic type
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "rawwr", hobbies: ["Sports", "kitchen"] }, { age: 69 });
console.log(mergedObj.age); //error
//second example
function displayDataType(id, name) {
    console.log("DataType of Id: " + typeof id + "\nDataType of Name: " + typeof name);
}
displayDataType(101, "Abhishek");
