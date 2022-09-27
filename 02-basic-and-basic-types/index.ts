const addUp = (a: number, b: number) => {
  return a + b;
};

const printResult = (num: number): void => {
  console.log("Result: " + num);
};

printResult(addUp(5, 12));

//undefined is a type in the ts
// let someValue: undefined

const printResult1 = (num: number): undefined => {
  console.log(num);
  return;
};
