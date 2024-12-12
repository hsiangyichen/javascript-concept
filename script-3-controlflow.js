/* --------------------------------- if/else -------------------------------- */
const time = 12;
const timeOfWeek = "weekday";

if (timeOfWeek === "weekday") {
  if (time < 10) {
    console.log("You're early!");
  } else if (time === 10) {
    console.log("You're on-time!");
  } else {
    console.log("You're late!");
  }
} else {
  console.log("You shouldn't be in class!");
}

/* --------------------------------- switch --------------------------------- */
const facialExpression = "frowning";

switch (facialExpression) {
  case "smiling":
    console.log("You look happy");
    break;
  case "frowning":
    console.log("You look sad");
    break;
  case "scowl":
    console.log("You look angry");
    break;
  default:
    console.log("I don't know");
}

/* ------------------------------- for loops ------------------------------ */
const famousCats = ["garfield", "felix", "meowth"];

// 1.2
for (let i = 0; i < famousCats.length; i++) {
  console.log(famousCats[i]);
}

// 1.3
for (let j = famousCats.length - 1; j >= 0; j--) {
  console.log(famousCats[j]);
}

/* ------------------------------- while loop ------------------------------- */
// 1.2
let i = 0;
while (i < famousCats.length) {
  console.log(famousCats[i]);
  i++;
}

// 1.3
let j = famousCats.length - 1;
while (j >= 0) {
  console.log(famousCats[j]);
  j--;
}

/* ------------------------- terminating a for loop ------------------------- */
const myFavorite = "felix";

for (let i = 0; i < famousCats.length; i++) {
  if (myFavorite === famousCats[i]) {
    console.log("There you are!");
    break;
  } else {
    console.log("Kitty?");
  }
}

/* ------------------------- terminating a while loop ------------------------- */
let k = 0;
while (k < famousCats.length) {
  if (myFavorite === famousCats[i]) {
    console.log("There you are!");
    break;
  } else {
    console.log("Kitty?");
  }
  k++;
}
