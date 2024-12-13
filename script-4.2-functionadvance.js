/* ---------------------- Named Functions as Parameters --------------------- */
// 1.
function outputName(nameToPrint) {
  const finalString = "Your name is: " + nameToPrint;
  console.log(finalString);
}

// 2.
function sayMyName(firstName, lastName, printFunction) {
  const fullName = firstName + " " + lastName;
  printFunction(fullName);
}

// 3.
sayMyName("Michelle", "Chen", outputName);

// 4.
sayMyName("John", "Doe", console.log);

/* -------------------- Anonymous Functions as Parameters ------------------- */
// 1.
setTimeout(function () {
  console.log("This message is displayed after 2 seconds.");
}, 2000);
// 2.
setTimeout(function () {
  sayMyName("Michelle", "Chen", outputName);
}, 2000);

/* ----------------------------- Arrow Functions ---------------------------- */
// 1.
setTimeout(() => {
  console.log("This message is displayed after 2 seconds.");
}, 2000);
// 2.
setTimeout(() => {
  sayMyName("Michelle", "Chen", outputName);
}, 2000);
