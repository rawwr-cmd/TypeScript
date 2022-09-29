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
  private lastReport: string;

  //getters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  //setters
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

accountingReport.mostRecentReport = "last balancesheet report"; //setters
accountingReport.addEmployee("rawwr");
accountingReport.addEmployee("pallu");
accountingReport.printEmployeeInformation();
accountingReport.addReport("Employees Worksheets");
console.log(accountingReport.mostRecentReport);

accountingReport.printReport();
