//u can use interface inplace of type
// interface Admin {}
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}
//intersection types(both properties of admin and employee)
type seniorEmployee = Admin & Employee;

const e1: seniorEmployee = {
  name: "rawwr",
  privileges: ["create-server"],
  startDate: new Date(),
};

type unknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: unknownEmployee) => {
  console.log(`Name: ${emp.name}`); //both have name property

  //if privileges in emp
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }

  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }

  //   console.log(`Privileges: ${emp.privileges}`); //only admin has privileges
};

printEmployeeInformation(e1);
console.log("---------------");
printEmployeeInformation({ name: "cypher", startDate: new Date() });

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//universal is number because both are number

//type guards
const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

class Car {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }

  carryCargo(quantity: number) {
    console.log(`Loading cargo...${quantity}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  if (vehicle instanceof Car) {
    vehicle.loadCargo(1000);
  }

  if (vehicle instanceof Truck) {
    vehicle.carryCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

//Descriminated unions(making type guards easier)
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed: ", animal.flyingSpeed);
  //   }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: ", speed);
};

// const Bird1 = {
//   type: "bird",
//   flyingSpeed: 10.789,
// };

moveAnimal({ type: "bird", flyingSpeed: 10.789 });
