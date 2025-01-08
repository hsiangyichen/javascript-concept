class ProductApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://bstn-api-lab-f060f124aa11.herokuapp.com/";
  }

  async getProducts() {
    try {
      const response = await axios.get(
        `${this.baseUrl}products?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("An error occurred: " + error);
    }
  }

  async addProduct(newProduct) {
    try {
      const response = await axios.post(
        `${this.baseUrl}products?api_key=${this.apiKey}`,
        newProduct
      );
      return response.data;
    } catch (error) {
      console.error("An error occurred: " + error);
    }
  }
}
