/*
  But : caloriesCtrl du projet Fitness  
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class CaloriesCtrl {
  constructor() {
    this.afficherMenu();
    this.afficherFiltreCalories();

    $("#accueil").click(() => {
      this.redirigerAccueil();
    })

    $("#exercices").click(() => {
      this.redirigerExercices();
    })

    $("#calories").click(() => {
      this.redirigerCalories();
    })

    $("#filtreDuration").on("submit", (event) => {
      event.preventDefault();
      this.afficherFiltreCalories();
    });
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

  redirigerAccueil() {
    indexCtrl.loadAccueil();
  }

  redirigerExercices() {
    indexCtrl.loadExercices();
  }

  redirigerCalories() {
    indexCtrl.loadCalories();
  }

  afficherFiltreCalories() {
    http.rechercheFiltreCalories();
  }
}
