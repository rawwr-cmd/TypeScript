"use strict";
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result2 = add1(1, "rahul");
const result1 = add1("rawwr", " gold");
result1.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "rahul",
    job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);
