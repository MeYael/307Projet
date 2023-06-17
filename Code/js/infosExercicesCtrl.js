/*
  But : infosExercicesCtrl du projet Fitness  
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class InfosExercicesCtrl {
  constructor(infosExercices) {
    this.afficherMenu();
    this.afficherInformations(infosExercices);

    $("#exercices").click(() => {
      this.redirigerExercices();
    })

  }

  afficherMenu() {
    $(".menu").click(function () {
      $(this).next().toggle();
    });

    $("#enteteAccueil ul li").click(function () {
      $(this).parent().hide();
    });

    $(document).click(function (event) {
      const target = event.target;
      const menu = $("#enteteAccueil ul");

      if (!menu.is(target) && !$(".menu").is(target)) {
        menu.hide();
      }
    });

  }

  afficherInformations(infosExercices) {
    document.getElementById("titreInfoNom").innerHTML = infosExercices.name;
    document.getElementById("typeInfo").innerHTML += '<div id="pasBold">' + "&nbsp;" + infosExercices.type + "</div>";
    document.getElementById("muscleInfo").innerHTML += '<div id="pasBold">' + "&nbsp;" + infosExercices.muscle + "</div>";
    document.getElementById("equipmentInfo").innerHTML += '<div id="pasBold">' + "&nbsp;" + infosExercices.equipment + "</div>";
    document.getElementById("difficultyInfo").innerHTML += '<div id="pasBold">' + "&nbsp;" + infosExercices.difficulty + "</div>";
    document.getElementById("instructionsInfo").innerHTML += '<div id="pasBold">' + infosExercices.instructions + "</div>";
  }

  redirigerExercices() {
    indexCtrl.loadExercices();
  }

}
