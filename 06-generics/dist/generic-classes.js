"use strict";
//specific genric class
class DataStorage {
    constructor() {
        this.Data = [];
    }
    addData(item) {
        this.Data.push(item);
    }
    removeData(item) {
        if (this.Data.indexOf(item) === -1) {
            return;
        }
        this.Data.splice(this.Data.indexOf(item), 1); //-1, always remove from the last
    }
    getData() {
        return [...this.Data];
    }
}
const newStorage = new DataStorage();
newStorage.addData(2);
newStorage.addData("rawwr");
newStorage.addData("rawwr2");
newStorage.addData("rawwr3");
newStorage.removeData("rawwr2");
console.log(newStorage.getData());
const schoolList = (name, age, hobbies, DateOfAdmission) => {
    let studentList = {};
    studentList.name = name;
    studentList.age = age;
    studentList.hobbies = hobbies;
    studentList.DateOfAdmission = DateOfAdmission;
    return studentList;
};
const rawwr = schoolList("rawwr", 69, ["sleeping", "eating"], new Date());
console.log(rawwr);
const readOnly1 = ["sleeping", "eating"];
// readOnly1.push("cattling"); // error read only thus no change
//readOnly1.pop(); // error read only thus no change
