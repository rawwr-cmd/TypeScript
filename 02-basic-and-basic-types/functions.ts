const addUp = (a: number, b: number) => {
  return a + b;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

printResult(addUp(5, 12));

//undefined is a type in the ts
// let someValue: undefined

// const printResult1 = (num: number): undefined => {
//   console.log(num);
//   return;
// };

let combineValues: (a: number, b: number) => number;

combineValues = addUp;
// combineValues = 67;
// combineValues = printResult; //undefined

console.log(combineValues(8, 8));

//function types and callbacks
const callBack = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

callBack(5, 12, (result) => {
  console.log(`Result is ${result}`);
  // doesn't rlly care about the return type
});
