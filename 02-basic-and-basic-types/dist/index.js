"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 1;
if (typeof userInput === "string") {
    userName = userInput;
}
const button = document.querySelector("button");
const clickHandler = (message) => {
    console.log(`Clicked! ${message}`);
};
button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
