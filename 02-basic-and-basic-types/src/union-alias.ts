type combinable = number | string;
type checkNumber = "as-number" | "as-text";

const sumUp = (a: combinable, b: combinable, c: checkNumber) => {
  let result;
  if ((typeof a === "number" && typeof b === "number") || c === "as-number") {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }

  return result;

  //   if (c === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
};

const addOn = sumUp("bull", "dog", "as-text");
const addOn1 = sumUp(67, 78, "as-number");
const addOn2 = sumUp("67", "78", "as-number");

console.log(addOn);
console.log(addOn1);
console.log(addOn2);

type User = { name: string; age: number };
const u1: User = { name: "John", age: 30 };

const greet = (user: User) => {
  console.log(`Hi, I am ${user.name}`);
};

const ageChecker = (user: User, checkAge: number) => {
  return user.age > checkAge;
};

greet(u1);
ageChecker(u1, 67);
