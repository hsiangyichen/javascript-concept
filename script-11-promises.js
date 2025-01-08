/* Your credit card */
const creditCard = { balance: 0, limit: 2000 };

/* Products you can buy */
const products = [
  { name: "T-shirt", price: 20, numberPurchased: 0 },
  { name: "Handbag", price: 200, numberPurchased: 0 },
  { name: "Computer", price: 2000, numberPurchased: 0 },
];

/* Function to display the current amounts of everything in the DOM */
function displayBalances() {
  const balanceEl = document.querySelector(".card-balance");
  const myProductsEl = document.querySelector(".my-products");

  // Display the credit card balance
  balanceEl.innerText = "Balance: $" + creditCard.balance;

  // Display the products purchased
  myProductsEl.innerHTML = "";
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerText = product.name + ": " + product.numberPurchased;
    myProductsEl.appendChild(listItem);
  });
}

/* Function to buy a product with your credit card */
/* Takes a single product object as a parameter */
/* Returns a Promise */
function buyProduct(product) {
  return new Promise((resolve, reject) => {
    // Wait a second or two to simulate credit card processing delay
    const randomTime = Math.random() * 2000;
    setTimeout(processPayment, randomTime);

    function processPayment() {
      // If the price is within the credit card's limit,
      // 1) charge the card, 2) purchase the product, 3) resolve the promise
      if (creditCard.balance + product.price <= creditCard.limit) {
        creditCard.balance += product.price;
        product.numberPurchased++;
        return resolve({
          status: `Purchased ${product.name} for $${product.price}`,
          timestamp: Date.now(),
        });
      }

      // Otherwise the price exceeds the credit card's limit, so reject the promise
      reject({
        status: `Declined purchase of ${product.name} for $${product.price}`,
        timestamp: Date.now(),
      });
    }
  });
}

displayBalances(); // You can call this pre-written function to update the DOM later

/* --------------------------------- part 1 --------------------------------- */
async function goShopping() {
  try {
    const tShirtResult = await buyProduct(products[0]);
    console.log(tShirtResult);
    displayBalances();

    const handbagResult = await buyProduct(products[1]);
    console.log(handbagResult);
    displayBalances();

    const computerResult = await buyProduct(products[2]);
    console.log(computerResult);
    displayBalances();
  } catch (error) {
    console.log(error); // Declined purchase of Computer for $2000
  }
}

// goShopping();

/* --------------------------------- part 2 --------------------------------- */
async function buyAllProducts() {
  try {
    const results = await Promise.all([
      buyProduct(products[0]),
      buyProduct(products[1]),
      buyProduct(products[2]),
    ]);
    console.log("Purchased 3 products");
    console.log(results);
    displayBalances();
  } catch (error) {
    console.log("Failed to purchase all 3 products");
    console.log(error);

    // Increase the credit limit
    increaseCreditLimit();
    buyAllProducts();
  }
}

// buyAllProducts();

function increaseCreditLimit() {
  // Increase the limit
  creditCard.limit = 5000;
  console.log("Updated credit card limit to $5000");

  // Update the limit display
  const limitEl = document.querySelector(".card-limit");
  limitEl.innerText = "(Limit: $" + creditCard.limit + ")";
}

/* --------------------------------- part 3 --------------------------------- */
function refundProduct(product) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (product.numberPurchased > 0) {
        creditCard.balance -= product.price;
        product.numberPurchased--;
        resolve(`Refunded ${product.name} for $${product.price}`);
      } else {
        reject(`Cannot refund ${product.name}, no purchases made.`);
      }
    }, 5000);
  });
}

async function buyAndRefund() {
  try {
    const itemsToPurchase = [products[0], products[1]];

    const purchaseResult = await Promise.all(
      itemsToPurchase.map((item) => buyProduct(item))
    );

    displayBalances();
    console.log(purchaseResult);

    /* ----- 1st: Refund all products ----- */
    // const refundResult = await Promise.all(
    //   itemsToPurchase.map((item) => refundProduct(item))
    // );

    /* --- 2nd: Refund only products[0] --- */
    const refundResult = await refundProduct(products[0]);

    displayBalances();
    console.log(refundResult);
  } catch (error) {
    console.log(error);
  }
}

buyAndRefund();
