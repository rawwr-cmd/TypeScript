var sumUp = function (a, b, c) {
    var result;
    if ((typeof a === "number" && typeof b === "number") || c === "as-number") {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
    //   if (c === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
};
var addOn = sumUp("bull", "dog", "as-text");
var addOn1 = sumUp(67, 78, "as-number");
var addOn2 = sumUp("67", "78", "as-number");
console.log(addOn);
console.log(addOn1);
console.log(addOn2);
