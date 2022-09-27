"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: "John",
    age: 30,
};
console.log(person);
const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
    productDetails: [1, "nice product"],
};
product.productDetails.push("must buy if you are a cat");
// product.productDetails[1] = 1;
// console.log(product);
//arrays
let movies;
movies = ["The Godfather", "The Godfather II", "The Godfather III"];
for (const movie of movies) {
    //   console.log(movie.toUpperCase());
    //   console.log(movie.map()); // ERROR!
}
// const person: {
//   name: string;
//   age: number;
// } = {
// const ADMIN = 0;
// const USER = 1;
// const READ_ONLY = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
})(Role || (Role = {}));
const user = {
    name: "John",
    age: 30,
    role: Role.ADMIN,
};
if (user.role === Role.ADMIN) {
    console.log("is admin");
}
