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
//extends string | number
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

interface Lengthy {
  length: number;
}

// another generic type
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["sports", "cooking"]));

//keyof constraint
function valueKey<T extends Object, U extends keyof T>(object: T, key: U) {
  return object[key];
}

console.log(valueKey({ name: "rawwr", hobbies: "sleeping" }, "hobbies"));
