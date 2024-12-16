/* --------------------------- Selecting Elements --------------------------- */
// 1.
let link = document.getElementById("nav-bar");
console.log(link);
console.log(typeof link);

// 2.
let main = document.querySelector("main");
console.log(main);
console.log(typeof main);

// 3.
let allLinks = document.querySelectorAll("a");
console.log(allLinks);
console.log(typeof allLinks);

// 4.
let firstLink = document.querySelector("a");
console.log(firstLink);
console.log(typeof firstLink);

/* 
    The difference between querySelectorAll and querySelector:
        - querySelector selects one element
        - querySelectorAll selects all matching elements
*/

/* ---------------------- Getting and Setting InnerHTML --------------------- */
// 1.
let logo = document.querySelector(".logo");

// 2.
console.log(logo.innerHTML);

// 3.
logo.innerHTML = "hello";
console.log(logo.innerHTML);

/* ------------------- Setting Style on Multiple Elements ------------------- */
// 1.
let allAnchors = document.querySelectorAll("a");

// 2.
for (let i = 0; i < allAnchors.length; i++) {
  allAnchors[i].classList.add("link");
}
