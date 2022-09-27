// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "John",
    age: 30
};
console.log(person);
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    },
    productDetails: [1, "nice product"]
};
product.productDetails.push("must buy if you are a cat");
// product.productDetails[1] = 1;
console.log(product);
//arrays
var movies;
movies = ["The Godfather", "The Godfather II", "The Godfather III"];
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    console.log(movie.toUpperCase());
    //   console.log(movie.map()); // ERROR!
}
