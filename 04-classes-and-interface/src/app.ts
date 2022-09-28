class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  //method- can be accessed as a private
  describe(this: Department) {
    const { name } = this;
    console.log(`Department: ${name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
// console.log(accounting);
// accounting.employees[0] = "Max";
accounting.name = "maths";

accounting.addEmployee("rawwr");
accounting.addEmployee("maxi");

accounting.describe();
accounting.printEmployeeInformation();

//accessing the this keyword
// const accCopy = { name: "Cloud", describe: accounting.describe };
// accCopy.describe();
