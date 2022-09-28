"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        const { id, name } = this;
        console.log(`Department ${id}: ${name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("D1", "Accounting");
accounting.addEmployee("rawwr");
accounting.addEmployee("maxi");
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map