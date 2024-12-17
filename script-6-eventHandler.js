/* ------------------------------ Click Events ------------------------------ */
window.addEventListener("click", function (event) {
  console.log(event.target); // Depending on where you click the window, you will see that element printed in console.
});

let logo = document.querySelector(".header__logo");

logo.addEventListener("click", function () {
  logo.classList.add("header__logo--big"); // When you click, the logo will become styled according to this class in the stylesheet.
});

/* ----------------------------- Keyboard Events ---------------------------- */
let searchBox = document.querySelector(".search");
let content = document.querySelector(".card__content");
let heroTitle = document.querySelector(".hero-title");

searchBox.addEventListener("keyup", function (event) {
  heroTitle.innerHTML = event.key; // Use event.key to identify which key was pressed.
  content.innerHTML = event.target.value; // Use event.target.value to access the full value of the input at that moment.
});
