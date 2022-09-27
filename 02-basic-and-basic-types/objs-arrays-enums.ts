// const person: {
//   name: string;
//   age: number;
// } = {

const person = {
  name: "John",
  age: 30,
};

console.log(person);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  productDetails: [number, string];
} = {
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
let movies: string[];
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

enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  READ_ONLY = 100,
}

const user = {
  name: "John",
  age: 30,
  role: Role.ADMIN,
};

if (user.role === Role.ADMIN) {
  console.log("is admin");
}
