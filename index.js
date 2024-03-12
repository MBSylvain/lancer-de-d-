
let global = 0;
let resultatD = 0;
let tr = 0;

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
    console.log(tr)
    //alternance des lanceurs
    if (tr % 2 === 0) {
        console.log("c'est au joueur n°01 de jouer");
        function mjscore() {
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
    } else {
        console.log("c'est au joueur n°02 de jouer")
        function mjscore() {
            let b = (document.getElementById('resultatDe'));
            // Récupérer le texte affiché dans l'élément + convertion en nombre
            var texteAffiche = Number(a.textContent);
            global2 += texteAffiche;
            console.log("Score global :", global2);

            // Vérifier si le score global atteint ou dépasse 100
            if (global2 >= 30) {
                console.log("Félicitations ! Vous avez gagné !");
                // Vous pouvez ajouter d'autres actions ici, comme afficher un message de victoire dans l'interface utilisateur.
            } else {
                console.log("Non encore gagné. Continuez à jouer !");
            }
        };
    }
};


// Mettre à jour le score global en ajoutant le résultat du dé


function mjscore() {
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

