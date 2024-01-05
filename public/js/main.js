// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Description des patients $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 

//! Définition d'une classe patient pour créer les personnages.

class Patient {
    constructor(nom, maladie, argent, poche, etatDeSante) {
        
        this.nom = nom;
        this.maladie = maladie ;
        this.argent = argent ;
        this.poche = poche ;
        this.etatDeSante = etatDeSante ;
    
    }

    seDeplacer(destination,lieuActuel) {

        
    }

}

let marcus = new Patient ("Marcus", "Mal indenté", 100, "vide", "malade") ;
let optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade") ;
let sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade") ;
let darthvader = new Patient ("Darthvader", "azmatique", 110, "vide", "malade") ;
let semicolon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade") ;


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
    lieu : ""

}

