"use strict";
const e1 = {
    name: "rawwr",
    privileges: ["create-server"],
    startDate: new Date(),
};
const printEmployeeInformation = (emp) => {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
};
printEmployeeInformation(e1);
console.log("---------------");
printEmployeeInformation({ name: "cypher", startDate: new Date() });
const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
class Car {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
class Truck {
    drive() {
        console.log("driving a truck...");
    }
    carryCargo(quantity) {
        console.log(`Loading cargo...${quantity}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Car) {
        vehicle.loadCargo(1000);
    }
    if (vehicle instanceof Truck) {
        vehicle.carryCargo(1000);
    }
};
