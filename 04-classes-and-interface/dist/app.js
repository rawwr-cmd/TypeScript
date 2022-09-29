"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
const accounting = new Department("D1", "Accounting");
const emp1 = Department.createEmployee("trayolor");
console.log(emp1, Department.fiscalYear);
accounting.addEmployee("rawwr");
accounting.addEmployee("maxi");
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map