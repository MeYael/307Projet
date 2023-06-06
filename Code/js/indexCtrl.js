/*
  But : indexCtrl du projet    
  Auteur : Yaël Meyer
  Date :   06.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new HttpService();
  indexCtrl = new IndexCtrl();
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadAccueil();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  // Charge la page d'accueil
  loadAccueil() {
    this.vue.chargerVue("accueil", () => new AccueilCtrl());
  }
}
