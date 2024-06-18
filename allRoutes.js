import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/catalogue", "Catalogue", "/pages/catalogue.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Deconnexion", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html"),
    new Route("/orders", "Historique des commandes", "/pages/orders/allOrders.html"),
    new Route("/cart", "Mon panier", "/pages/orders/cart.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gamestore";