// Description des patients
 

// Les patients ont un nom, une maladie, de l'argent, une poche, un état de santé.

// Ils savent se rendre à un endroit, prendre un médicament et payer.

// Au début, les patients sont dans une salle d'attente. 

// (Liste des patients que vous allez crée, avec leurs valeurs respectives)

// | Nom      | Maladie        | Argent | Poche | État de Santé |
// | -------- | -------------- | ------ | ----- | ------------- |
// | Marcus   | mal indenté    | 100    | vide  | malade        |
// | Optimus  | unsave         | 200    | vide  | malade        |
// | Sangoku  | 404            | 80     | vide  | malade        |
// | DarthVader | azmatique    | 110    | vide  | malade        |
// | Semicolon  | syntaxError  | 60     | vide  | malade        |

class Patient {
    constructor(nom, maladie, argent, poche, etatDeSante) {
        
        this.nom = nom;
        this.maladie = maladie ;
        this.argent = argent ;
        this.poche = poche ;
        this.etatDeSante = etatDeSante ;
    
    }

}

let marcus = new Patient ("Marcus", "Mal indenté", 100, "vide", "malade") ;
let optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade") ;
let sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade") ;
let darthvader = new Patient ("Darthvader", "azmatique", 110, "vide", "malade") ;
let semicolon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade") ;

