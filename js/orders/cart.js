class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    if (product.isInStock()) {
      product.purchase();
      this.products.push(product);
    } else {
      console.log(`Désolé, ${product.title} est en rupture de stock.`);
    }
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

export default Cart;
