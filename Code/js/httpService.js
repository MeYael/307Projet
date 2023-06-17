/*
  But : httpService du projet Fitness   
  Auteur : Yaël Meyer
  Date :   17.06.2023/ V1.0
*/
class HttpService {
  constructor() { }

  /*
  **  $.ajaxSetup permet de définir une fois un élément sans le refaire par la suite. Ici cela se fait l'error
  */
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  rechercheFiltreListe() {
    let type = $("#filtreType").val();
    let muscle = $("#filtreMuscle").val();
    let difficulty = $("#filtreDifficulty").val();
    var settings = {
      "url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=" + type + "&muscle=" + muscle + "&difficulty=" + difficulty,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "X-RapidAPI-Key": "7d63c19110mshc301819ad761fb4p172cb6jsn0f8b6be8bb2c",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
      },
    };

    $.ajax(settings).done(function (response) {
      $("#resultats").empty();

      // Parcourir les données de la réponse de l'API
      $.each(response, function (index, exercice) {
        // Créer une cellule pour chaque exercice
        var cellule = $('<div class="cellule">');
        cellule.data('exercice-info', exercice);
        cellule.text(exercice.name);

        // Ajouter la cellule au conteneur
        $("#resultats").append(cellule);
      });
    });
  }

  rechercheFiltreNom() {
    let nom = $('#recherche').val();
    var settings = {
      "url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=" + nom,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "X-RapidAPI-Key": "7d63c19110mshc301819ad761fb4p172cb6jsn0f8b6be8bb2c",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
      },
    };

    $.ajax(settings).done(function (response) {
      $("#resultats").empty();

      // Parcourir les données de la réponse de l'API
      $.each(response, function (index, exercice) {
        // Créer une cellule pour chaque exercice
        var cellule = $('<div class="cellule">');
        cellule.data('exercice-info', exercice);
        cellule.text(exercice.name);

        // Ajouter la cellule au conteneur
        $("#resultats").append(cellule);
      });
    });
  }

  rechercheFiltreCalories() {
    let activity = $("#rechercheNom").val();
    let weight = $("#rechercheWeight").val();
    let duration = $("#rechercheDuration").val();
    var settings = {
      "url": "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=" + activity + "&weight=" + weight + "&duration=" + duration,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "X-RapidAPI-Key": "7d63c19110mshc301819ad761fb4p172cb6jsn0f8b6be8bb2c",
        "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com"
      },
    };

    $.ajax(settings).done(function (response) {
      $("#resultatsCalories").empty();

      // Parcourir les données de la réponse de l'API
      $.each(response, function (index, exercice) {
        // Créer une cellule pour chaque exercice
        var cellule = $('<div class="cellule">');
        cellule.data('exercice-info', exercice);
        cellule.text(exercice.name + " / calories : " + exercice.total_calories);

        // Ajouter la cellule au conteneur
        $("#resultatsCalories").append(cellule);
      });
    });
  }

}
