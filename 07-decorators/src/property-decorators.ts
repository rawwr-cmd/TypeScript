function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName); //constructor, price
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target); //constructor, getPrice, descriptor
  console.log(name); //constructor, getPrice, descriptor
  console.log(descriptor); //{writable: true, enumerable: false, configurable: true, value: ƒ}
}

function Log3(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target, name, position); //constructor, getPrice, 0
}

class Product {
  @Log
  setPrice(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("invalid price - should be positive");
    }
  }

  constructor(public name: string, private _price: number) {}

  @Log2
  getPriceWithTax(@Log3 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; //function
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
const button = document.querySelector("button")!;

button.addEventListener("click", p.showMessage);
// button.addEventListener("click", p.showMessage.bind(p));
