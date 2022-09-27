const add = (a: number, b: number, showResult: boolean, message: string) => {
  // if (typeof a !== "number" || typeof b !== "number") {
  //   throw new Error("a and b must be numbers");
  // }  //using js

  const result = a + b;
  if (showResult) {
    console.log(`${message} ${result}`);
  } else {
    return result;
  }
};

const num1 = 10;
const num2 = 20;
const printResult = true;
const resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
