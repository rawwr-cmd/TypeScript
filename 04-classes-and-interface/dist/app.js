"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        const { name } = this;
        console.log(`Department: ${name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.name = "maths";
accounting.addEmployee("rawwr");
accounting.addEmployee("maxi");
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map