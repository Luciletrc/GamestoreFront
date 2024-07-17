class Product {
  constructor(id, title, genre, price, stock) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.stock = stock;
    this.category = null; // Ajout de la propriété pour la catégorie
  }

  // Méthode pour vérifier le stock
  isInStock() {
    return this.stock > 0;
  }

  // Méthode pour décrémenter le stock
  purchase() {
    if (this.isInStock()) {
      this.stock--;
    } else {
      throw new Error('Stock insuffisant');
    }
  }

  // Méthode pour assigner une catégorie au produit
  assignCategory(category) {
    this.category = category;
  }
}

export default Product;
