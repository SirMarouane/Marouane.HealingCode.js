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

