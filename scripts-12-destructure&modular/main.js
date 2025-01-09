/* --------------------------------- part 1 --------------------------------- */
import axios from "./libs/axios.js";

const dogImage = document.querySelector(".dog-image");

// Function to fetch and display a random dog image
const fetchDogImage = async () => {
  try {
    const response = await axios.get(
      "https://random.dog/woof.json?filter=mp4,webm"
    );

    dogImage.src = response.data.url;
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
};

// Call the function
fetchDogImage();

/* --------------------------------- part 2 --------------------------------- */
// Import the default export and named exports from toolbelt.js
import tools, { construction, business } from "./utils/toolbelt.js";
console.log("Favorite Tools:", tools);

// Import the construction
construction();

// Import the business
console.log("Business Info:", business);

/* --------------------------------- part 3 --------------------------------- */
// Rename a named import using the `as` syntax
import { construction as newConstruction } from "./utils/toolbelt.js";
newConstruction();

// Destructuring the business object into individual variables
const { name, address, phone } = business;
console.log("Business Name:", name);
console.log("Business Address:", address);
console.log("Business Phone:", phone);

/* --------------------------------- part 4 --------------------------------- */
// Import all named exports into a variable
import * as toolbeltModule from "./utils/toolbelt.js";

// Accessing and using the named exports
toolbeltModule.construction();

console.log("Business Info:", toolbeltModule.business);

// Access default export through toolbeltModule
console.log("Default Export (Favorite Tools):", toolbeltModule.default);
