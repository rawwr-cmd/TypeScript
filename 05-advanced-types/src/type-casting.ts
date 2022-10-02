// const paragraph = document.querySelector("p");

// const para1 = document.getElementById("message-output");

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

//! stands for not null
// const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "hi there";
}

//indextypes
//not restricting just to email and just password
interface ErrorContainer {
  //{email: "not a valid email", username: 'must start with the capital letter'}

  //   id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  username: "must start with the capital letter",
};
