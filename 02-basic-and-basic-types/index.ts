//unlknown is better than any
//unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 1;

if (typeof userInput === "string") {
  userName = userInput;
}

//the never type

function errorCheck(
  message: string | undefined,
  code: number | undefined
): never {
  throw { message: message, errorCode: code };
  // while (true) {} //never returns
}

errorCheck("An error occured", 500);

//watchmode tsc nameofthefile -w
