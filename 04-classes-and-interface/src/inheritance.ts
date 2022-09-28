class Itdepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT Department");
    // this.admins = admins;
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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  //overridding methods
  addEmployee(name: string) {
    if (name === "rawwr") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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

accountingReport.addEmployee("rawwr");
accountingReport.addEmployee("pallu");
accountingReport.printEmployeeInformation();
accountingReport.addReport("Employees Worksheets");
accountingReport.printReport();
