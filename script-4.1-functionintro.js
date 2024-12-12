/* ------------ Function to compute the average of three numbers ------------ */
function avg(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
  return avg;
}

// Test for avg function
const testNumbers = [4, 8, 12];
const computedAverage = avg(testNumbers[0], testNumbers[1], testNumbers[2]);
console.log("Computed Average:", computedAverage); // expect to be 8

/* ------------------ Function to check string equivalence ------------------ */
function isEqual(str1, str2) {
  return str1 === str2;
}

// Test case: should return true
const testTrueStrings = ["hello", "hello"];
const isEqualTrueResult = isEqual(testTrueStrings[0], testTrueStrings[1]);
console.log("Is Equal (should be true):", isEqualTrueResult);

// Test case: should return false
const testFalseStrings = ["hello", "world"];
const isEqualFalseResult = isEqual(testFalseStrings[0], testFalseStrings[1]);
console.log("Is Equal (should be false):", isEqualFalseResult);

/* -------------- Function to output a parameter to the console ------------- */
function output(x) {
  console.log(x);
  return;
}

// Test for output function
output("Testing the output function");
output(42);
output({ key: "value" });
