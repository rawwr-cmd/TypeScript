"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
console.log(registeredValidators);
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        //these names are the constructor's names
        [propName]: ["required"],
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        //these names are the constructor's names
        [propName]: ["positive"],
    };
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    console.log(objValidatorConfig);
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            console.log(validator);
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, _price) {
        this.title = title;
        this._price = _price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "_price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value; //it's not a number, originally
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input passed, please try again!");
        return;
    }
    console.log(createdCourse);
});
