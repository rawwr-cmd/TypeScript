"use strict";
//decorator
// function Logger(constructor: Function) {
//   console.log('hey there, what"s up');
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator factory
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    //our original constructor will not just produce any but also name
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("rendering template");
                const hookElement = document.getElementById(hookId);
                const person1 = new originalConstructor();
                if (hookElement) {
                    hookElement.innerHTML = template;
                    hookElement.querySelector("h1").textContent = person1.name;
                }
            }
        };
    };
}
let Person = 
// @Logger("LOGGING - PERSON")
class Person {
    constructor() {
        this.name = "rawwr";
        console.log("Person created");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    withTemplate("<h1>My Person Object</h1>", "app")
    // @Logger("LOGGING - PERSON")
], Person);
const pers = new Person();
console.log(pers);
//Now we can see that the decorator is executed when the class is defined,
// not when it is instantiated.
/* A Decorator is a special kind of declaration that can be attached to a class declaration,
method, accessor, property, or parameter. Decorators use the form @expression ,
where expression must evaluate to a function that will be called at runtime with
information about the decorated declaration */
//bottom most decorators execute first
