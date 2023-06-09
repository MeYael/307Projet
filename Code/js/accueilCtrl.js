/*
  But : accueilCtrl du projet Fitness    
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class AccueilCtrl {
  constructor() {
    this.afficherDate();
    this.afficherMenu();

    $("#accueil").click(() => {
      this.redirigerAccueil();
    })

    $("#exercices").click(() => {
      this.redirigerExercices();
    })

    $("#calories").click(() => {
      this.redirigerCalories();
    })

  }

  afficherMenu() {
    $(".menu").click(function() {
      $(this).next().toggle();
    });
  
    $("#enteteAccueil ul li").click(function() {
      $(this).parent().hide();
    });
  
    $(document).click(function(event) {
      const target = event.target;
      const menu = $("#enteteAccueil ul");
  
      if (!menu.is(target) && !$(".menu").is(target)) {
        menu.hide();
      }
    });

  }

  //affiche la date
  afficherDate() {
    this.updateDate();
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

  redirigerAccueil(){
    indexCtrl.loadAccueil();
  }

  redirigerExercices(){
    indexCtrl.loadExercices();
  }

  redirigerCalories(){
    indexCtrl.loadCalories();
  }

}
