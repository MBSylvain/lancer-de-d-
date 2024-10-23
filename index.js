// Déclaration des variables globales
let scoreGlobalJoueur1 = 0;
let scoreGlobalJoueur2 = 0;
let resultatDe = 0;
let tour = 0;
let scoreTemporaireJoueur1 = 0;
let scoreTemporaireJoueur2 = 0;

// Fonction pour lancer le dé lors du clic sur le bouton "Lancer les dés"
function lancerDe() {
  resultatDe = Math.floor(Math.random() * 6) + 1;
  // Alternance des joueurs
  let tourJoueur = tour % 2;
  if (tourJoueur === 1) {
    document.getElementById("JoueurN1").style.display = "inline-block";
    document.getElementById("JoueurN2").style.display = "none";
    scoreTemporaireJoueur1 += resultatDe;
    if (resultatDe === 1) {
      scoreTemporaireJoueur1 = 0;
      tour += 1;
    }
  } else {
    document.getElementById("JoueurN1").style.display = "none";
    document.getElementById("JoueurN2").style.display = "inline-block";
    scoreTemporaireJoueur2 += resultatDe;
    if (resultatDe === 1) {
      scoreTemporaireJoueur2 = 0;
      tour += 1;
    }
  }
  // Affichage du score temporaire
  document.getElementById("cumulScoreTemporaireJoueur1").innerHTML =
    scoreTemporaireJoueur1;
  document.getElementById("cumulScoreTemporaireJoueur2").innerHTML =
    scoreTemporaireJoueur2;
}

// Fonction pour mettre à jour l'affichage de l'image du dé
function afficherImageDe() {
  // Supprimer l'ancienne image du dé
  var ancienneImage = document.getElementById("de").querySelector("img");
  if (ancienneImage) {
    ancienneImage.remove();
  }
  // Création de l'élément image
  var image = document.createElement("img");
  // Définition de l'attribut src de l'image
  image.src = "dice/dice-" + resultatDe + ".svg";
  // Définition de l'attribut alt de l'image
  image.alt = "dé";
  image.width = "60";
  image.height = "60";
  // Insertion de l'image dans le document
  document.getElementById("de").appendChild(image);
}

// Fonction pour mettre à jour le score
function mettreAJourScore() {
  let tourJoueur = tour % 2;
  if (tourJoueur === 1) {
    scoreGlobalJoueur1 += scoreTemporaireJoueur1;
    scoreTemporaireJoueur1 = 0;
  } else {
    scoreGlobalJoueur2 += scoreTemporaireJoueur2;
    scoreTemporaireJoueur2 = 0;
  }
  tour += 1;
  document.getElementById("cumulScoreTemporaireJoueur1").innerHTML =
    scoreTemporaireJoueur1;
  document.getElementById("cumulScoreTemporaireJoueur2").innerHTML =
    scoreTemporaireJoueur2;

  // Vérifier si le score global atteint ou dépasse 30
  if (scoreGlobalJoueur1 >= 30) {
    document.getElementById("win1").innerHTML = "Bravo vous avez gagné";
    document.getElementById("LancerD").style.display = "none";
  }
  if (scoreGlobalJoueur2 >= 30) {
    document.getElementById("win2").innerHTML = "Bravo vous avez gagné";
    document.getElementById("LancerD").style.display = "none";
  } else {
    console.log("Pas encore gagné. Continuez à jouer !");
  }
  document.getElementById("cumulScoreJoueur1").innerHTML = scoreGlobalJoueur1;
  document.getElementById("cumulScoreJoueur2").innerHTML = scoreGlobalJoueur2;
}

// Fonction principale pour gérer un tour de jeu
function tourDeJeu() {
  let resultatDe = lancerDe();
  afficherImageDe(resultatDe);
  mettreAJourScore(resultatDe);
}

// Fonction pour réinitialiser les scores
function reinitialiserScores() {
  scoreGlobalJoueur1 = 0;
  scoreGlobalJoueur2 = 0;
  scoreTemporaireJoueur1 = 0;
  scoreTemporaireJoueur2 = 0;
  tour = 0;
  document.getElementById("cumulScoreJoueur1").innerHTML = scoreGlobalJoueur1;
  document.getElementById("cumulScoreJoueur2").innerHTML = scoreGlobalJoueur2;
  document.getElementById("cumulScoreTemporaireJoueur1").innerHTML =
    scoreTemporaireJoueur1;
  document.getElementById("cumulScoreTemporaireJoueur2").innerHTML =
    scoreTemporaireJoueur2;
  document.getElementById("win1").innerHTML = "";
  document.getElementById("win2").innerHTML = "";
  document.getElementById("win2").remove.innerHTML = "";
  document.getElementById("LancerD").style.display = "inline-block";
}
