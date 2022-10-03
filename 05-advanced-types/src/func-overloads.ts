type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal1 = Combinable1 & Numeric1;

//universal is number because both are number

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(a: Combinable1, b: Combinable1) {
  //type guards

  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result3 = add1("yu ", "pop") as string;
const result2 = add1(1, "rahul");
const result1 = add1("rawwr", " gold");

result1.split(" ");

//optional chaining

const fetchedUserData = {
  id: "u1",
  name: "rahul",
  job: { title: "CEO", description: "My own company" },
};

// for javascript
// console.log(fetchedUserData.job && fetchedUserData.job.title);

console.log(fetchedUserData?.job?.title);
