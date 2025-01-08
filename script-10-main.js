const API_KEY = "23d88e37-0a57-4304-83fe-a150fd0dfb54";

const productApi = new ProductApi(API_KEY);

// console.log("ProductApi instance:", productApi);

async function testApiCalls() {
  // Test getProducts
  try {
    const products = await productApi.getProducts();
    console.log("Products retrieved:", products);
  } catch (error) {
    console.error("Error in getProducts:", error);
  }

  // Test addProduct
  try {
    const newProduct = {
      name: "Sample Product",
      category: "Test Category",
      price: 19.99,
    };
    const addedProduct = await productApi.addProduct(newProduct);
    console.log("Added product:", addedProduct);

    // Fetch products again to confirm addition
    const newProducts = await productApi.getProducts();
    console.log("Updated products list:", newProducts);
  } catch (error) {
    console.error("Error in addProduct:", error);
  }
}

// Call the test function
testApiCalls();
