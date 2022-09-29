"use strict";
class Customer {
    constructor(n) {
        this.age = 10;
        if (n) {
            this.firstName = n;
        }
    }
    greet(phrase) {
        if (this.firstName) {
            console.log(`${phrase} ${this.firstName}`);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user2;
user2 = new Customer();
user2.greet("hey there, I am--");
console.log(user2);
//# sourceMappingURL=optional-params.js.map