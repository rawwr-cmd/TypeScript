"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName); //constructor, price
}
function Log2(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target); //constructor, getPrice, descriptor
    console.log(name); //constructor, getPrice, descriptor
    console.log(descriptor); //{writable: true, enumerable: false, configurable: true, value: ƒ}
}
function Log3(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target, name, position); //constructor, getPrice, 0
}
class Product {
    constructor(name, _price) {
        this.name = name;
        this._price = _price;
    }
    setPrice(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("invalid price - should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "setPrice", null);
__decorate([
    Log2,
    __param(0, Log3)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value; //function
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
// button.addEventListener("click", p.showMessage.bind(p));
