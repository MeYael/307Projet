/*
  But : accueilCtrl    
  Auteur : Yaël Meyer
  Date :   06.06.2023/ V1.0
*/
class AccueilCtrl {
  constructor() {
    this.afficherDate();
    this.afficherMenu();
  }

  afficherMenu() {
    $("img.menu").mouseover(function() {
      $(this).next().slideDown(500);
    }).mouseout(function() {
      const $menu = $(this).next();
      if (!$menu.is(":hover")) {
        $menu.slideUp(500);
      }
    });

  }

  //affiche la date
  afficherDate() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  }

  // Fonction pour formater la date
  formatDate(date) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  // Mettre à jour la date actuelle dans le footer
  updateDate() {
    const currentDate = new Date();
    document.getElementById("footer").innerHTML = this.formatDate(currentDate);
  }
}
