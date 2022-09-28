"use strict";
let age = 30;
const add = (a, b = 1) => a + b;
const sumUp = (output) => console.log(`sum is ${output}`);
sumUp(add(2, 3));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const movies = ["a", "b", "c"];
const newMovies = ["d"];
const spread = [...movies, ...newMovies];
movies.push(...newMovies);
const person = {
    name: "andrea",
    age: 30,
};
const newPerson = {
    ...person,
    street: "main street 123",
};
const addOn = (...nums) => nums.reduce((total, number) => total + number);
const addedNumbers = addOn(1, 2, 3);
console.log(addedNumbers);
const addOn1 = (...args) => args.filter((el) => console.log(el));
addOn1(5, 6, 3, "hey there");
const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "ttete564545gg",
    born: 1930,
    died: 1978,
    city: "Gaya",
    state: "Bihar",
    pincode: "123",
};
const { firstName: userName, lastName, email, password } = user;
console.log(userName, lastName, email, password);
const copiedObj = user;
user.firstName = "Akshay";
console.log(user);
