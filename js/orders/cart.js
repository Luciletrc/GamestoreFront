// Exemple de structure de données pour les articles du panier
const panier = [];

// Fonction pour ajouter un article au panier
function ajouterAuPanier(article) {
  panier.push(article);
  afficherPanier();
}

// Fonction pour retirer un article du panier
function retirerDuPanier(index) {
  panier.splice(index, 1);
  afficherPanier();
}

// Fonction pour afficher les articles du panier
function afficherPanier() {
  const containerPanier = document.getElementById('cart-item');
  containerPanier.innerHTML = ''; // Vider le contenu actuel

  panier.forEach((article, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'row no-gutters';
    itemDiv.innerHTML = `
      <div class="col-md-4">
        <img src="${article.image}" class="card-img" alt="${article.nom}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${article.nom}</h5>
          <p class="card-text">Prix: €${article.prix}</p>
          <button class="btn btn-danger btn-sm" onclick="retirerDuPanier(${index})">Retirer</button>
        </div>
      </div>
    `;
    containerPanier.appendChild(itemDiv);
  });
}

// Fonction pour réserver les articles
function reserverArticles() {
  // Ici, vous pouvez ajouter la logique pour envoyer les articles réservés au serveur ou à la base de données
  const token = "";
  setToken(token);
  window.location.replace("/");

  alert('Les articles ont été réservés avec succès !');
}

// Exemple d'ajout d'articles au panier
ajouterAuPanier({ nom: 'Jeu Aventure', prix: 59.99, image: 'chemin_vers_image_jeu_aventure' });
ajouterAuPanier({ nom: 'Jeu Stratégie', prix: 39.99, image: 'chemin_vers_image_jeu_strategie' });

// Assurez-vous que les ID des éléments dans le HTML correspondent à ceux utilisés dans ce script.
