// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Description des patients $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 

//! Définition d'une classe patient pour créer les personnages.

class Patient {
    constructor(nom, maladie, argent, poche, etatDeSante, lieu) {
        
        this.nom = nom;
        this.maladie = maladie ;
        this.argent = argent ;
        this.poche = poche ;
        this.etatDeSante = etatDeSante ;
        this.lieu = lieu ;

    
    }

    seDeplacer(destination,patient) {

        this.lieu = destination.lieu
        destination.personnePresente.push(this.nom)
        patient.lieu = this.lieu

        console.log(`${this.nom} est actuellement dans le/la ${this.lieu}`)
        console.log(`Personne présente dans le cabinet ----------> ${destination.personnePresente}`);
        
    }

}

let marcus = new Patient ("Marcus", "mal indenté", 100, "vide", "malade","salledAttente") ;
let optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade","salledAttente") ;
let sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade", "salledAttente") ;
let darthvader = new Patient ("Darthvader", "azmatique", 110, "vide", "malade", "salledAttente") ;
let semicolon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade", "salledAttente") ;




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Description du docteur $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//? Dans son cabinet, il y a son chat de race sphynx pour maintenir un environnement stérile.
//? Son chat miaule toutes les deux secondes dans la console (bonus).
//? La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.

//! création du personnage docteur avec la définition d'objets: par exemple l'objet docteur est constitué de propriétés 
//! et un objet dans un objet.

let docteur = {
    diagnostique : {
        d1 : "mal indenté",
        d2 : "unsave",
        d3 : "404",
        d4 : "azmatique",
        d5 : "syntaxError",
    },

    prescription : {
        p1 : "ctrl+maj+f",
        p2 : "saveOnFocusChange",
        p3 : "CheckLinkRelation",
        p4 : "Ventoline",
        p5 : "f12+doc",
    },

    caisse : 0,
    personnePresente : [],
    lieu : "cabinet",

    osculpter(patient) {
        if (patient.maladie == "mal indenté") {
            patient.poche = docteur.prescription.p1

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p1}`);
            console.log(`Cela vous fera 50 euros.`);

            patient.argent = patient.argent - 50
            console.log(`Voici. Portefeuille ----------> ${patient.argent}`);
        }

        else if (patient.maladie == "unsave") {
            patient.poche = docteur.prescription.p2

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p2}`);
            console.log(`Cela vous fera 50 euros.`);

            patient.argent = patient.argent - 50
            console.log(`Voici. Portefeuille ----------> ${patient.argent}`);
        }

        

    }
    

}



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Description de la pharmacie $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//! Définition d'un objet pharmacie avec le prix de chaque traitement

//? | Traitement           | Prix  |
//? | -------------------- | ----- |
//? | `ctrl+maj+f`         | 60€   |
//? | `saveOnFocusChange`  | 100€  |
//? | `CheckLinkRelation`  | 35€   |
//? | `Ventoline`          | 40€   |
//? | `f12+doc`            | 20€   |

let pharmacie = {
    Traitement : {
        t1 : 60,
        t2 : 100,
        t3 : 35,
        t4 : 40,
        t5 : 20,
    }

}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Début de la simulation du projet $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Bienvenue chez le médecin $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);

console.log(`${marcus.nom} est dans la ${marcus.lieu}`);
console.log("________________________________________________________________________________________");

console.log(`Bonjour ${marcus.nom}, veuillez entrer.`);
console.log("________________________________________________________________________________________");

marcus.seDeplacer(docteur,marcus)

console.log("________________________________________________________________________________________");

docteur.osculpter(marcus)
console.log(`Ma poche ----------> ${marcus.poche}`);

console.log("________________________________________________________________________________________");

docteur.osculpter(optimus)
console.log(`Ma poche ----------> ${marcus.poche}`);