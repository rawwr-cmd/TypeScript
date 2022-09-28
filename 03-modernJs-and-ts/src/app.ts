let age = 30;

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld);

//true for js even if its a local scope

// if (age > 15) {
//   let isOld = true;
// }

// console.log(isOld); //block scope

//Uncaught ReferenceError: isOld is not defined

//arrow functions

const add = (a: number, b: number = 1) => a + b;

// const sumUp = (c: number | string): void => console.log(`sum is ${c}`);

const sumUp: (c: number | string) => void = (output) =>
  console.log(`sum is ${output}`);

sumUp(add(2, 3));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
  // if no parameters
  //   button.addEventListener("click", () => console.log("clicked"));
}

//spread operator
const movies = ["a", "b", "c"];
const newMovies = ["d"];

const spread = [...movies, ...newMovies];

// console.log(spread);

movies.push(...newMovies);

const person = {
  name: "andrea",
  age: 30,
};

const newPerson = {
  ...person,
  street: "main street 123",
};

// console.log(newPerson);

//REST PARAMS COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL ARRAY
const addOn = (...nums: number[]) =>
  nums.reduce((total, number) => total + number);

const addedNumbers = addOn(1, 2, 3);
console.log(addedNumbers);

//more generic
const addOn1 = (...args: [number, number, number, string]) =>
  args.filter((el) => console.log(el));

addOn1(5, 6, 3, "hey there");

//array and object destrucring

//arrays
const hobbies = ["sports", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

//objects

/*DESTRUCTING OBJECTS */
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
