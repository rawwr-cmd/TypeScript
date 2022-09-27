var addUp = function (a, b) {
    return a + b;
};
var printResult = function (num) {
    console.log("Result: " + num);
};
printResult(addUp(5, 12));
//undefined is a type in the ts
// let someValue: undefined
// const printResult1 = (num: number): undefined => {
//   console.log(num);
//   return;
// };
var combineValues;
combineValues = addUp;
// combineValues = 67;
// combineValues = printResult; //undefined
console.log(combineValues(8, 8));
//function types and callbacks
var callBack = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
callBack(5, 12, function (result) {
    console.log("Result is ".concat(result));
});
