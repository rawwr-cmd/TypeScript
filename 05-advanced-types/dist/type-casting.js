"use strict";
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "hi there";
}
const errorBag = {
    email: "not a valid email",
    username: "must start with the capital letter",
};
