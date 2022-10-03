const names: Array<string> = ["Alice", "Bob", "Eve"]; //same as string[]
names[0].split(" ");
// names[0] = 9; // Error!
// console.log(names);

//promise knows which data it returns
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is done!");
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  //   data.split(" ");
});

// creating a generic type
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "rawwr", hobbies: ["Sports", "kitchen"] },
  { age: 69 }
);
console.log(mergedObj.age); //error

//second example
function displayDataType<T, U>(id: T, name: U): void {
  console.log(
    "DataType of Id: " + typeof id + "\nDataType of Name: " + typeof name
  );
}
displayDataType<number, string>(101, "Abhishek");
