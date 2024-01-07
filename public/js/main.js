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

    seDeplacer(destination) {

        this.lieu = destination.lieu
        destination.personnePresente.push(this.nom)

        if (destination.personnePresente.length == 2) {
            destination.personnePresente.splice(0,1)
        
        } else {
            
        }
       

        console.log(`${this.nom} est actuellement dans le/la ${this.lieu}`)
        console.log("Personne présente dans le cabinet ---------->",destination.personnePresente);
        
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
    personneSortante : [],
    lieu : "cabinet",

//! La méthode osculpter va permettre de contrôler chaque patient en fonction de sa maladie.
//! J'ai utilisé des conditons pour vérifier la maladie, déduire le montant de la consultation et récupérer
//! la prescription

    osculpter(patient) {

        if (patient.maladie == "mal indenté") {
            patient.poche = docteur.prescription.p1

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p1}`);
            console.log(`Ma poche ----------> prescription : ${patient.poche}`);

            console.log(`La consultation est à 50 euros.`);
           
            patient.argent = patient.argent - 50

            patient.etatDeSante = "en traitement"

        }

        else if (patient.maladie == "unsave") {
            patient.poche = docteur.prescription.p2

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p2}`);
            console.log(`Ma poche ----------> prescription : ${patient.poche}`);

            console.log(`La consultation est à 50 euros.`);

            // setTimeout(() => {console.log("paiement en cours..."); }, 1000)
            // setTimeout(() => {console.log("paiement accepté !"); }, 2000)
            // setTimeout(() => {console.log("solde: ", patient.argent, "euros"); }, 3000)

            patient.argent = patient.argent - 50

             patient.etatDeSante = "en traitement"
            
        }

        else if (patient.maladie == "404") {
            patient.poche = docteur.prescription.p3

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p3}`);
            console.log(`Ma poche ----------> prescription : ${patient.poche}`);

            console.log(`La consultation est à 50 euros.`);
            
            // setTimeout(() => {console.log("paiement en cours..."); }, 1000)
            // setTimeout(() => {console.log("paiement accepté !"); }, 2000)
            // setTimeout(() => {console.log("solde: ", patient.argent, "euros"); }, 3000)

            patient.argent = patient.argent - 50

            patient.etatDeSante = "en traitement"

        }

        else if (patient.maladie == "azmatique") {
            patient.poche = docteur.prescription.p4

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p4}`);
            console.log(`Ma poche ----------> prescription : ${patient.poche}`);

            console.log(`La consultation est à 50 euros.`);

            // setTimeout(() => {console.log("paiement en cours..."); }, 1000)
            // setTimeout(() => {console.log("paiement accepté !"); }, 2000)
            // setTimeout(() => {console.log("solde: ", patient.argent, "euros"); }, 3000)

            patient.argent = patient.argent - 50

            patient.etatDeSante = "en traitement"
           
        }

        else if (patient.maladie == "syntaxError") {
            patient.poche = docteur.prescription.p5

            console.log(`Vous êtes ${patient.maladie}. Je vous préscris du ${docteur.prescription.p5}`);
            console.log(`Ma poche ----------> prescription : ${patient.poche}`);

            console.log(`La consultation est à 50 euros.`);

            // setTimeout(() => {console.log("paiement en cours..."); }, 1000)
            // setTimeout(() => {console.log("paiement accepté !"); }, 2000)
            // setTimeout(() => {console.log("solde: ", patient.argent, "euros"); }, 3000)
        

            patient.argent = patient.argent - 50

            patient.etatDeSante = "en traitement"

        }

        else {

            "Vous n'êtes pas malade"
        }
        
    }
    
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Description de la pharmacie $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//! Définition d'un objet pharmacie avec le prix de chaque traitement et d'une méthode permettant d'aller
//! à la pharmacie

//? | Traitement           | Prix  |
//? | -------------------- | ----- |
//? | `ctrl+maj+f`         | 60€   |
//? | `saveOnFocusChange`  | 100€  |
//? | `CheckLinkRelation`  | 35€   |
//? | `Ventoline`          | 40€   |
//? | `f12+doc`            | 20€   |

let pharmacie = {

    traitement : [60,100,35,40,20],

    lieu : "pharmacie",

    pharmacyMoving(patient){
        console.log(`__________________________________________ Bienvenue à la pharmacie ____________________________________________________`)

        patient.lieu = pharmacie.lieu
    }

}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Début de la simulation du projet $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

console.log(`__________________________________________ Bienvenue chez le médecin ____________________________________________________


`);

//! J'ai mis une boucle for qui permet de faire passer chaque patient chez le docteur à l'aide de l'incrémentation
//! Ensuite, j'ai conditionné les étapes de la pharmacie pour savoir si le patient survie ou non
//! J'ai utilisé la fonction setTimeout pour créer un effet de paiement.

let tabPatient = [marcus, optimus, sangoku, darthvader, semicolon]

for (let i = 0; i < tabPatient.length; i++ )  {

console.log(`${tabPatient[i].nom} est dans la ${tabPatient[i].lieu}`);
console.log("_________________________________________________________________________________________________________________________");

console.log(`Bonjour ${tabPatient[i].nom}, veuillez entrer.`);
console.log("_________________________________________________________________________________________________________________________");

tabPatient[i].seDeplacer(docteur) ;

console.log("_________________________________________________________________________________________________________________________");

docteur.osculpter(tabPatient[i]) ;

// setTimeout(() => {console.log("paiement en cours..."); }, 1000)
// setTimeout(() => {console.log("paiement accepté !"); }, 2000)
// setTimeout(() => {console.log("solde: ", tabPatient[i].argent, "euros"); }, 3000)

console.log("solde de", tabPatient[i].nom,": ", tabPatient[i].argent, "euros");

console.log(tabPatient[i]);

console.log("_________________________________________________________________________________________________________________________");

pharmacie.pharmacyMoving(tabPatient[i])

console.log("Vous avez :",tabPatient[i].argent - pharmacie.traitement[i], "euros");

if ((tabPatient[i].argent - pharmacie.traitement[i]) > 0) {
    console.log("Je peux vous fournir le traitement");
    console.log(tabPatient[i].nom," est guéri");
    tabPatient[i].etatDeSante = "guéri"
    
}

else if ((tabPatient[i].argent - pharmacie.traitement[i]) < 0) {
    console.log(tabPatient[i].nom," est mort. C'est Allah que nous appartenons et c'est vers lui que nous retournerons");
    tabPatient[i].lieu = "cimetière"
    tabPatient[i].etatDeSante = "mort"

}


console.log("_________________________________________________________________________________________________________________________");
    
}

console.log(tabPatient);


