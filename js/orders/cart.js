// cart.js

// Exemple de structure de données pour les articles du panier
const panier = [];

// Fonction pour ajouter un article au panier
function ajouterAuPanier(article) {
  panier.push(article);
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
        </div>
      </div>
    `;
    containerPanier.appendChild(itemDiv);
  });
}

// Ajouter un écouteur d'événements à tous les boutons d'ajout au panier
document.querySelectorAll('.bi-cart-plus').forEach(button => {
  button.addEventListener('click', event => {
    // Récupérer les informations de l'article à partir de l'élément parent
    const card = event.target.closest('.card');
    const nom = card.querySelector('.card-title').textContent;
    const prix = parseFloat(card.querySelector('.card-text').textContent.replace('Prix: €', ''));
    const image = card.querySelector('.card-img-top').src;

    // Ajouter l'article au panier
    ajouterAuPanier({ nom, prix, image });
  });
});

function removeFromCart(index) {
  if (index > -1 && index < panier.length) {
    panier.splice(index, 1);
    afficherPanier();
  } else {
    console.error('Index hors limites :', index);
  }
}

function reserverArticles() {
  const token = "";
  setToken(token);
  window.location.replace("/");

  alert('Les articles ont été réservés avec succès !');
}
