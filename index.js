
let global01 = 0;
let global02 = 0;
let resultatD = 0;
let tr = 0;
let pointTemp1 = 0;
let pointTemp2 = 0;

// lancé de dé au clique du bouton lancer les dés
function lancerDe() {
    resultatD = Math.floor(Math.random() * 6) + 1;
    console.log(resultatD);
    //alternance des lanceurs
    let tourJoeur = (tr % 2);
    if (tourJoeur === 1) {
        pointTemp1 += resultatD;
        if (resultatD === 1) {
            pointTemp1 = 0;
            tr = tr + 1;
        }
    }

    else {
        pointTemp2 += resultatD;
        if (resultatD === 1) {
            pointTemp2 = 0;
            tr = tr + 1;
        }

    }
    //afficher du pointTemp
    document.getElementById("cumulScore12").innerHTML = (pointTemp1);
    document.getElementById("cumulScore22").innerHTML = (pointTemp2);
}
// Fonction pour mettre à jour l'affichage de l'image du dé
function afficherImageDe() {
    // Supprimer l'ancienne image du dé
    var ancienneImage = document.getElementById("de").querySelector("img");
    if (ancienneImage) {
        ancienneImage.remove();
    }
    // Création de l'élément image
    var image = document.createElement('img');
    // Définition de l'attribut src de l'image
    image.src = 'dice/dice-' + resultatD + '.svg';
    // Définition de l'attribut alt de l'image
    image.alt = "dé";
    image.width = '60';
    image.height = '60';
    // Insertion de l'image dans le document
    document.getElementById("de").appendChild(image);
}

function mjscore() {

    //alternance des lanceurs
    //tr = tr + 1;
    console.log("partie" + tr);
    let tourJoeur = (tr % 2);
    if (tourJoeur === 1) {
        console.log("c'est au joueur n°01 de jouer");
        global01 += pointTemp1;
        pointTemp1 = 0
        console.log("Score global01 :", global01 + "et" + tr);
    } else {
        console.log("c'est au joueur n°02 de jouer");
        global02 += pointTemp2;
        pointTemp2 = 0
    }
    tr = tr + 1;
    document.getElementById("cumulScore12").innerHTML = (pointTemp1);
    document.getElementById("cumulScore22").innerHTML = (pointTemp2);


    // Vérifier si le score global atteint ou dépasse 100
    if (global01 >= 30) {
        console.log("Félicitations joueur 01! Vous avez gagné !");
        // Vous pouvez ajouter d'autres actions ici, comme afficher un message de victoire dans l'interface utilisateur.
    } else {
        console.log("Non encore gagné. Continuez à jouer !");
    }
    document.getElementById("cumulScore1").innerHTML = (global01);
    document.getElementById("cumulScore2").innerHTML = (global02);

};
// Fonction principale pour gérer un tour de jeu
function tourDeJeu() {
    let resultatD = lancerDe();
    console.log("Résultat du lancer de dé :", resultatD);
    afficherImageDe(resultatD);
    miseAJourScore(resultatD);
}

function reinitialiserScores() {
    global01 = 0;
    global02 = 0;
    let pointTemp1 = 0;
    let pointTemp2 = 0;
    tr = 0;
    document.getElementById("cumulScore1").innerHTML = global01;
    document.getElementById("cumulScore2").innerHTML = global02;
    document.getElementById("cumulScore12").innerHTML = (pointTemp1);
    document.getElementById("cumulScore22").innerHTML = (pointTemp2);
    console.log("Scores réinitialisés à zéro.");
}
