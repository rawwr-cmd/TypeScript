"use strict";
class Itdepartment extends Department {
    constructor(id, admins) {
        super(id, "IT Department");
        this.admins = admins;
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
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReport() {
        console.log(this.reports);
    }
}
const accountingReport = new AccountingDepartment("D2", [
    "Balancesheet",
    "quaterly report",
]);
accountingReport.addReport("Employees Worksheets");
accountingReport.printReport();
//# sourceMappingURL=inheritance.js.map