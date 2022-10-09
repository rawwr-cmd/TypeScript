interface ValidatorConfig {
  //KEY : VALUE PAIRS
  [property: string]: {
    //[required, positive]
    [validatableProp: string]: string[]; //for ex "name" : "required, lowercase" (use interfaces to get rid of this array)
  };
}

const registeredValidators: ValidatorConfig = {};
console.log(registeredValidators);

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    //these names are the constructor's names
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    //these names are the constructor's names
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
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
  @Required
  title: string;
  @PositiveNumber
  _price: number;

  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title")! as HTMLInputElement;
  const priceEl = document.getElementById("price")! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; //it's not a number, originally

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input passed, please try again!");
    return;
  }

  console.log(createdCourse);
});
