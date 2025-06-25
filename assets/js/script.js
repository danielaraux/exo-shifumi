// Note Algo : En JS les fonctions se lisent une après une. Il est meilleur pour la lisibilité et l'ergonomie de mettre notre code dans peu de fonctions (exemple dans la fonction battle)


// Pour récupérer ce que l'user a choisi et ne rien mettre au départ sur le choix de l'IA.
let choixJoueur = ""
let choixIA = ""
let messageAttente = ""

let scoreJoueur = 0
let scoreOrdinateur = 0
let scoreEgalite = 0

//  Fonction pour donner le choix stocké dans choixJoueur à "choix".
function recupererChoix(choix) {
    choixJoueur = choix
    randomize()
    setTimeout(() => {
        battle(choixJoueur, choixIA);
    }, "2000");
}


// Fonction pour randomizer, on déclare la variable choixAleatoire, on déclare notre variable nombre qui fera le random.
// Nous disons que le choixIA contiendra le choixAleatoire avec le random.
function randomize() {
    let choixAleatoire = ['pierre', 'feuille', 'ciseaux'];
    let nombre = [Math.floor(Math.random() * 3)];
    choixIA = choixAleatoire[nombre]
}


// Fonction battle (elle pourrait être simplifiée en mettent else vous avez perdu par exemple sans avoir a repréciser les conditions.)
function battle(choixJoueur, choixIA) {

    // win
    if (choixJoueur == "pierre" && choixIA == "ciseaux") {
        console.log(`Vous avez gagné !`)
        message = "Vous avez joué Pierre, l'ordinateur a joué Ciseaux. \nVous gagnez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreJoueur").innerText = scoreJoueur += 1



    } else if (choixJoueur == "feuille" && choixIA == "pierre") {
        console.log(`Vous avez gagné !`)
        message = "Vous avez joué Feuille, l'ordinateur a joué Pierre. \nVous gagnez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreJoueur").innerText = scoreJoueur += 1


    } else if (choixJoueur == "ciseaux" && choixIA == "feuille") {
        console.log(`Vous avez gagné !`)
        message = "Vous avez joué Ciseaux, l'ordinateur a joué Feuille. \nVous gagnez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreJoueur").innerText = scoreJoueur += 1


    }

    // lose 
    if (choixJoueur == "feuille" && choixIA == "ciseaux") {
        console.log(`Vous avez perdu !`)
        message = "Vous avez joué Feuille, l'ordinateur a joué Ciseaux. \nVous perdez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreOrdinateur").innerText = scoreOrdinateur += 1

    } else if (choixJoueur == "ciseaux" && choixIA == "pierre") {
        console.log(`Vous avez perdu !`)
        message = "Vous avez joué Ciseaux, l'ordinateur a joué Pierre. \nVous perdez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreOrdinateur").innerText = scoreOrdinateur += 1

    } else if (choixJoueur == "pierre" && choixIA == "feuille") {
        console.log(`Vous avez perdu !`)
        message = "Vous avez joué Pierre, l'ordinateur a joué Feuille. \nVous perdez !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreOrdinateur").innerText = scoreOrdinateur += 1
    }

    // equality
    if (choixJoueur == "ciseaux" && choixIA == "ciseaux") {
        console.log(`C'est une égalité !`)
        message = "Vous avez joué Ciseaux, l'ordinateur a joué Ciseaux. \nC'est une égalité !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreEgalite").innerText = scoreEgalite += 1

    } else if (choixJoueur == "pierre" && choixIA == "pierre") {
        console.log(`C'est une égalité !`)
        message = "Vous avez joué Pierre, l'ordinateur a joué Pierre. \nC'est une égalité !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreEgalite").innerText = scoreEgalite += 1

    } else if (choixJoueur == "feuille" && choixIA == "feuille") {
        console.log(`C'est une égalité !`)
        message = "Vous avez joué Feuille, l'ordinateur a joué Feuille. \nC'est une égalité !"
        document.getElementById("resultat").innerText = message
        document.getElementById("scoreEgalite").innerText = scoreEgalite += 1
    }
}