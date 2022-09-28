class Department {
  //  private readonly id : string;
  //   private name: string;
  //   private id : string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  //method- can be accessed as a private
  describe(this: Department) {
    const { id, name } = this;
    console.log(`Department ${id}: ${name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'yu'; // readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("D1", "Accounting");
// console.log(accounting);
// accounting.employees[0] = "Max";
// accounting.name = "maths";

accounting.addEmployee("rawwr");
accounting.addEmployee("maxi");

accounting.describe();
accounting.printEmployeeInformation();

//accessing the this keyword
// const accCopy = { name: "Cloud", describe: accounting.describe };
// accCopy.describe();
