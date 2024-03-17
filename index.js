
let global01 = 0;
let global02 = 0;
let resultatD = 0;
let tr = 0;

// lancé de dé au clique du bouton

function lancerDe() {
    let resultatD = Math.floor(Math.random() * 6) + 1;
    console.log(resultatD);
    //Affiche la valeur du dé
    //document.getElementById("resultatDe").innerHTML = (resultatD);

    //nombre de tour
    tr = tr + 1;
    console.log("partie" + tr);
    // Création de l'élément image
    var image = document.createElement('img');
    // Définition de l'attribut src de l'image
    image.src = 'dice/dice-' + resultatD + '.svg';
    // Définition de l'attribut alt de l'image
    image.alt = "Nom de l'image";
    image.width = '60';
    image.height = '60';
    // Insertion de l'image dans le document
    document.getElementById("resultatDe").appendChild(image);
}

function mjscore() {
    let a = (document.getElementById('resultatDe'));
    // Récupérer le texte affiché dans l'élément + convertion en nombre
    var texteAffiche = Number(a.textContent);

    //alternance des lanceurs
    let tourJoeur = (tr % 2);
    if (tourJoeur === 1) {
        console.log("c'est au joueur n°01 de jouer");
        global01 += texteAffiche;
        console.log("Score global01 :", global01 + "et" + tr);
        console.log("partie" + tr);
    } else {
        console.log("c'est au joueur n°02 de jouer");
        global02 += texteAffiche;
        console.log("Score global02 :", global02);
    }
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
function afficher() {
    let ade = document.getElementById('resultatDe');
    // Récupérer le texte affiché dans l'élément + conversion en nombre
    var texteAfficheDe = parseInt(ade.textContent.trim());

    // Création de l'élément image
    var image = document.createElement("img");
    // Définition de l'attribut src de l'image
    image.src = 'dice/dice-' + texteAfficheDe + '.svg';
    console.log(image.src)
    // Définition de l'attribut alt de l'image
    image.alt = "Nom de l'image";
    // Insertion de l'image dans le document
    document.getElementById("resultatDe").appendChild(image);
}

