//-----CODE NON DRY------

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Marcel";

function saluer(prenom) {
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(
    `Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`
  );
}

//On salue les 3 personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);

//-----CODE MAL NOMMÉ------

//tableau des ages des élèves dans la classe
const agesElevesDeClasse = [14, 14, 15, 14, 16, 14, 14, 13];
// Nombre d'élèves
const nombreEleves = agesElevesDeClasse.length;
// variable pour calculer la somme des ages
let sommeAges = 0;
for (let age of agesElevesDeClasse) {
  sommeAges += age;
}
//moyenne d'age dans la classe
const moyenneAgesDeClasse = sommeAges / nombreEleves;
console.log(
  "Il y a " +
    nombreEleves +
    " élèves dans la classe et la moyenne d'age est " +
    moyenneAgesDeClasse
);

//-----CODE MAL MIS EN FORME------

const temperature = 25;

if (temperature < 10) {
  console.log("Il fait très froid");
} else if (temperature < 0) {
  console.log("Il fait froid");
} else if (temperature < 10) {
  console.log("Il fait frais");
} else if (temperature < 20) {
  console.log("Il fait doux");
} else if (temperature < 30) {
  console.log("Il fait bon");
} else {
  console.log("Il fait chaud");
}
