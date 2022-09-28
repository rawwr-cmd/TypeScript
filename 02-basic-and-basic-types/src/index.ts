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

// function errorCheck(
//   message: string | undefined,
//   code: number | undefined
// ): never {
//   throw { message: message, errorCode: code };
//   // while (true) {} //never returns
// }

// errorCheck("An error occured", 500);

//watchmode tsc nameofthefile -w

const button = document.querySelector("button")!;

const clickHandler = (message: string) => {
  console.log(`Clicked! ${message}`);
};

// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Clicked");
//   });
// }

button.addEventListener("click", clickHandler.bind(null, "You're welcome"));

const add = (n1: number, n2: number) => {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
};
