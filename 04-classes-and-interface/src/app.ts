// Interfaces define contracts, and that's the key word.
// You use an interface when you need to define a contract in your
// program but you don't really care about the rest of the properties of the class
// that fulfills that contract as long as it does.

//interface as a function
// type asFunction = (a: number, b: number) => number;

interface asFunction {
  (a: number, b: number): number;
}

let add: asFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string; //optional property
}

//u can extends one or more interfaces, u can't do this in classes
interface Greetable extends Named {
  // readonly name: string;
  greet(phrase: string): void;
}

// type Greeable = {
//   readonly name: string;
//   greet(phrase: string): void;
// };

//u can implement one or more than one interface
class Person implements Greetable {
  age = 10;

  constructor(public name: string) {}

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

// let user1: Person;

let user1: Greetable;

user1 = new Person("Papi");
// user1.name = "silker";           //readonly

user1.greet("hey there, I am--");

console.log(user1);
