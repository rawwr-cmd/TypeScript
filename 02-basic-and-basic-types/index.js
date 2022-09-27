"use strict";
//unlknown is better than any
//unknown type
let userInput;
let userName;
userInput = 5;
userInput = 1;
if (typeof userInput === "string") {
    userName = userInput;
}
//the never type
function errorCheck(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} //never returns
}
errorCheck("An error occured", 500);
//watchmode tsc nameofthefile -w
