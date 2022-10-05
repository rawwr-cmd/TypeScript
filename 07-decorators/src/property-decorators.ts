function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName); //constructor, price
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target, name, descriptor); //constructor, getPrice, descriptor
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
