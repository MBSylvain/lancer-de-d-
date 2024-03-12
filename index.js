
let global01 = 0;
let global02 = 0;
let resultatD = 0;
let tr = -1;

// lancé de dé au clique du bouton

function lancerDe() {
    let resultatD = Math.floor(Math.random() * 6) + 1;
    console.log(resultatD);
    //Affiche la valeur du dé
    document.getElementById("resultatDe").innerHTML = (resultatD);

    //nombre de tour
    tr = tr + 1;
    const bouton = document.getElementById('LancerD');
    bouton.addEventListener('click', lancerDe);
    console.log("partie" + tr)
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
};




// Mettre à jour le score global en ajoutant le résultat du dé


/**function mjscore() {
    let a = (document.getElementById('resultatDe'));
    // Récupérer le texte affiché dans l'élément + convertion en nombre
    var texteAffiche = Number(a.textContent);
    global += texteAffiche;
    console.log("Score global :", global);

    // Vérifier si le score global atteint ou dépasse 100
    if (global >= 30) {
        console.log("Félicitations ! Vous avez gagné !");
        // Vous pouvez ajouter d'autres actions ici, comme afficher un message de victoire dans l'interface utilisateur.
    } else {
        console.log("Non encore gagné. Continuez à jouer !");
    }
};
**/