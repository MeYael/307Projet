/*
  But : vueService du projet Fitness
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class VueService {
  constructor() { }
  chargerVue(vue, callback) {

    // charger la vue demandee
    $("#view").load("views/" + vue + ".html", function () {

      // si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }

    });
  }

}
