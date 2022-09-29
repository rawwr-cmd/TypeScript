"use strict";
class Itdepartment extends Department {
    constructor(id, admins) {
        super(id, "IT Department");
        this.admins = admins;
    }
}
const acc1 = new Itdepartment("D2", ["Max"]);
acc1.addEmployee("popers");
acc1.addEmployee("maxima");
acc1.name = "NEW NAME";
acc1.describe();
acc1.printEmployeeInformation();
console.log(acc1);
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "rawwr") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const accountingReport = new AccountingDepartment("D2", [
    "Balancesheet",
    "quaterly report",
]);
accountingReport.mostRecentReport = "last balancesheet report";
accountingReport.addEmployee("rawwr");
accountingReport.addEmployee("pallu");
accountingReport.printEmployeeInformation();
accountingReport.addReport("Employees Worksheets");
console.log(accountingReport.mostRecentReport);
accountingReport.printReport();
//# sourceMappingURL=inheritance.js.map