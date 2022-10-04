//decorator
// function Logger(constructor: Function) {
//   console.log('hey there, what"s up');
//   console.log(constructor);
// }

//decorator factory
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

function withTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(hookId);
    const person1 = new constructor();
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = person1.name;
    }
  };
}

@withTemplate("<h1>My Person Object</h1>", "app")

// @Logger("LOGGING - PERSON")
class Person {
  name = "rawwr";
  constructor() {
    console.log("Person created");
  }
}

const pers = new Person();
console.log(pers);

//Now we can see that the decorator is executed when the class is defined,
// not when it is instantiated.

/* A Decorator is a special kind of declaration that can be attached to a class declaration,
method, accessor, property, or parameter. Decorators use the form @expression ,
where expression must evaluate to a function that will be called at runtime with
information about the decorated declaration */
