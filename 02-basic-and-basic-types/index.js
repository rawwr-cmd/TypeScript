var addUp = function (a, b) {
    return a + b;
};
var printResult = function (num) {
    console.log("Result: " + num);
};
printResult(addUp(5, 12));
//undefined is a type in the ts
// let someValue: undefined
var printResult1 = function (num) {
    console.log(num);
    return;
};
