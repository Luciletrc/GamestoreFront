class Category {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.products = []; // Tableau pour stocker les produits de cette catégorie
    }
  
    // Méthode pour ajouter un produit à la catégorie
    addProduct(product) {
      this.products.push(product);
    }
  
    // Méthode pour récupérer tous les produits de la catégorie
    getAllProducts() {
      return this.products;
    }
  }
  
  export default Category;
  