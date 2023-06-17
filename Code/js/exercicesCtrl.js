/*
  But : exercicesCtrl du projet Fitness   
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class ExercicesCtrl {
  constructor() {
    this.afficherMenu();
    this.afficherFiltreListe();

    $('#filtreType').on('change', () => {
      this.afficherFiltreListe();
    })

    $('#filtreMuscle').on('change', () => {
      this.afficherFiltreListe();
    })

    $('#filtreDifficulty').on('change', () => {
      this.afficherFiltreListe();
    })

    $("#filtreForm").on("submit", (event) => {
      event.preventDefault();
      this.afficherFiltreNom();
    });

    $("#accueil").click(() => {
      this.redirigerAccueil();
    })

    $("#exercices").click(() => {
      this.redirigerExercices();
    })

    $("#calories").click(() => {
      this.redirigerCalories();
    })

    $("#resultats").on("click", ".cellule", function () {
      let infosExercices = $(this).data('exercice-info');
      indexCtrl.loadInfosExercices(infosExercices);
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

  afficherFiltreListe() {
    http.rechercheFiltreListe();
  }

  afficherFiltreNom() {
    http.rechercheFiltreNom();
  }

}


