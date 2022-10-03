//specific genric class
class DataStorage<T extends string | number | boolean> {
  private Data: T[] = [];

  addData(item: T) {
    this.Data.push(item);
  }

  removeData(item: T) {
    if (this.Data.indexOf(item) === -1) {
      return;
    }
    this.Data.splice(this.Data.indexOf(item), 1); //-1, always remove from the last
  }

  getData() {
    return [...this.Data];
  }
}

const newStorage = new DataStorage<string | number>();
newStorage.addData(2);
newStorage.addData("rawwr");
newStorage.addData("rawwr2");
newStorage.addData("rawwr3");
newStorage.removeData("rawwr2");
console.log(newStorage.getData());

// const newObjectStorage = new DataStorage<object>();
// const rawwr = { name: "rawwr" };
// newObjectStorage.addData(rawwr);
// newObjectStorage.addData({ name: "rawwr2" });
// newObjectStorage.addData({ name: "rawwr3" });
// newObjectStorage.removeData(rawwr); //got removed
// console.log(newObjectStorage.getData());

//generic utility types

interface studentList {
  name: string;
  age: number;
  hobbies: string[];
  DateOfAdmission: Date;
}

const schoolList = (
  name: string,
  age: number,
  hobbies: string[],
  DateOfAdmission: Date
): studentList => {
  let studentList: Partial<studentList> = {};
  studentList.name = name;
  studentList.age = age;
  studentList.hobbies = hobbies;
  studentList.DateOfAdmission = DateOfAdmission;
  return studentList as studentList;
};

const rawwr = schoolList("rawwr", 69, ["sleeping", "eating"], new Date());
console.log(rawwr);

const readOnly1: Readonly<string[]> = ["sleeping", "eating"];
// readOnly1.push("cattling"); // error read only thus no change
//readOnly1.pop(); // error read only thus no change
