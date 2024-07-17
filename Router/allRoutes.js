import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/catalogue", "Catalogue", "/pages/catalogue.html", [], "/js/catalogue.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["ROLE_USER", "ROLE_ADMIN", "ROLE_EMPLOYEE"]),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", ["ROLE_USER", "ROLE_ADMIN", "ROLE_EMPLOYEE"]),
    new Route("/orders", "Historique des commandes", "/pages/orders/allOrders.html", ["ROLE_USER"]),
    new Route("/cart", "Mon panier", "/pages/orders/cart.html", ["ROLE_USER"], "/js/orders/cart.js"),
    new Route("/dashboard", "Tableau de bord", "/pages/orders/dashboard.html", ["ROLE_ADMIN", "ROLE_EMPLOYEE"], "/js/orders/dashboard.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gamestore";