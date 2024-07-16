export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réservé aux utilisateurs déconnectés
["user"] -> Réservé aux utilisateurs avec le rôle client
["employee"] -> Réservé aux utilisateurs avec le rôle employee
["admin"] -> Réservé aux utilisateurs avec le rôle admin 
["admin", "employee"] -> Réservé aux utilisateurs avec le rôle employee OU admin
*/