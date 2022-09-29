abstract class Department {
  //  private readonly id : string;
  //   private name: string;
  //   private id : string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // console.log(Department.fiscalYear); //static method/keyword accessed here
  }

  // The static keyword is a non-access modifier used for methods and attributes.
  //  Static methods/attributes can be accessed without creating an object of a class.
  // can be accessed in construcor, de-attach from instances, so use className
  static createEmployee(name: string) {
    return { name: name };
  }

  //method- can be accessed as a private
  abstract describe(this: Department): void;
  // {
  // const { id, name } = this;
  // console.log(`Department ${id}: ${name}`);
  // }

  addEmployee(employee: string) {
    // this.id = 'yu'; // readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//cannot create an instance of an abstract class
//you cannot instantiaite an abstract class

// const accounting = new Department("D1", "Accounting");
// console.log(accounting);
// accounting.employees[0] = "Max";
// accounting.name = "maths";

// const emp1 = Department.createEmployee("trayolor");
// console.log(emp1, Department.fiscalYear);

// accounting.addEmployee("rawwr");
// accounting.addEmployee("maxi");

// accounting.describe();
// accounting.printEmployeeInformation();

//accessing the this keyword
// const accCopy = { name: "Cloud", describe: accounting.describe };
// accCopy.describe();
