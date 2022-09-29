"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        this.age = 10;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person("Papi");
user1.greet("hey there, I am--");
console.log(user1);
//# sourceMappingURL=app.js.map