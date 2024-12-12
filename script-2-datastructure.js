/* --------------------------------- Arrays --------------------------------- */
// 1.
const nameList = ["Michelle", "Amy", "Grace"];

// 2.
console.log(nameList);

// 3.
console.log(nameList[0]);

// 4.
console.log(nameList[2]);
console.log(nameList[1000]); // undefined

// 5.
const dogList = [];
dogList.push("Milk", "Oreo");

// 6.
console.log(dogList);

// 7.
dogList.pop();
console.log(dogList); // 2 items

// 8.
dogList[1] = "Cotton";
console.log(dogList);

dogList[5] = "Pepper";
console.log(dogList);

dogList.splice(2, 3);
console.log(dogList);

console.log("=====================");
/* --------------------------------- Objects -------------------------------- */

// 1.
const dogObject = {
  firstName: "Milk",
  lastName: "Chen",
  likesCoffee: true,
};

// 2.
const catObject = {};

catObject.firstName = "Milk";
catObject.lastName = "Chen";
catObject.likesCoffee = true;

// 3.
console.log(catObject.firstName);

// 4.
console.log(catObject.lastName);

// 5.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  likesCoffee: true,
};

currentKey = "firstName";
console.log(person[currentKey]);
currentKey = "lastName";
console.log(person[currentKey]);
currentKey = "likesCoffee";
console.log(person[currentKey]);

// 6.
person.areasOfExpertise = ["JavaScript", "Web Development", "Machine Learning"];
console.log(person);
