interface firstName {
  readonly firstName?: string;
  outputName?: string; //optional property
}

//u can extends one or more interfaces, u can't do this in classes
interface Greetable1 extends firstName {
  // readonly name: string;
  greet(phrase: string): void;
}

// type Greeable = {
//   readonly name: string;
//   greet(phrase: string): void;
// };

//u can implement one or more than one interface
class Customer implements Greetable1 {
  firstName?: string;

  age = 10;

  constructor(n?: string) {
    if (n) {
      this.firstName = n;
    }
  }

  greet(phrase: string) {
    if (this.firstName) {
      console.log(`${phrase} ${this.firstName}`);
    } else {
      console.log("Hi!");
    }
  }
}

let user2: Greetable1;

user2 = new Customer();

user2.greet("hey there, I am--");

console.log(user2);
