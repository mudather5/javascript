//exercices js

//exercice 1


console.log("Hello" + " " "Word");

var x = "Hello";
var y = "World";
console.log(x + " " + y);

//exercice 2

console.log(3 * 3);
console.log(12/0);
console.log(4 + 9 + 78);
console.log(12 - 7);
console.log(5e4);

//exercice 3

var Nom = prompt("entrez votre nom");
if (Nom == "jhon"){
  alert("Bienvenue" + " " + Nom);
}

//exercice 4

var nom = "mohamed";
var prenom = "mudather";
console.log(prenom + " " + nom);

//exercice 5

var myNombre = "123";
console.log(myNombre);


//exercice 6

var x = "hello world";
console.log(x.toUpperCase());

var x = "HELLO WORLD";
console.log(x.tolowerCase());


//exercice 1
var prenom = "mudather";
var str = "";
if (prenom ==="mudather"){
  console.log("true");
}else{
console.log("false");
}


//exercice 2 Calculer mon âge

var nb1 = Number(prompt("Quelle est l'anné acctuelle?"));
var nb2 = prompt("Quelle est votre date de naissance");
  alert(nb1-nb2 + "ans");


exercice 3 Problème de chaussures
var amt1 = 70;
var amt2 = 59;
var amt3 = 20;
var dis = 20;
console.log((amt1 + amt2 + amt3)*20/100);

//exercice 4  une calculatrice JavaScript//

var nb1 = prompt("quel est le première nombre à additonnner");
var nb2 = prompt("quel est le deuxième nmbre à additonnner ");
var total = Number(nb1) + Number(nb2);
  alert(total);


  //exercice 5 travailler avec les propriétés

  var firstName = prompt("entrez votre prenom");
   alert(firstName[0].toUpperCase() + firstName.slice(-1).toUpperCase());

   var lastName = prompt("entrez votre nom");
    alert(lastName[0].toUpperCase() + lastName.slice(-1).toUpperCase());*/

//Exercice 1 : Le nombre le plus grand

var valeur1 = 20;
var valeur2 = 30;
var valeur3 = 21;
var valeur4 = 100;
console.log(Math.max(valeur1, valeur2, valeur3, valeur4));

//Exercice 2 : Condition d'âge

var utlisateur = Number(prompt("entrez votre âge"));

if(utlisateur < 0){
  alert("entrez un âge réel");
}
if(utlisateur => 21){
  alert("vous pouvez accez");
}

if (utlisateur%2 === 0){
  alert("votre age est pair");
}

if ((Math.sqrt)utlisateur === 0){
  alert("votre âge est un carré");
}


/*for (i = 0; i < 51; i +=10){
  if (i != 30){

    console.log(i);
  }
}

var i = 0;
while (i < 51) {
  if (i != 30){
    console.log(i);
  }
  i +=10;
}*/

//Exercice 3 le nombre caché

var nbPlyer = Number(prompt("tappez votre réponse"));

if (nbPlyer === 8) {
    alert("gagné");
}
  if (nbPlyer < 8){
    alert("votre reponse est plus petite");
    var nbplyer = Number(prompt("tappez votre réponse"));
}

  if(nbPlyer > 8) {
    alert("votre reponse ets plus grande");
    var nbplyer = Number(prompt("tappez votre réponse"));
  }



//Exercice 4 : Des nombres en boucle

  for(i = 0; i < 101; i++){
    console.log(i);
  }


//Exercice 5 : Des nombres en boucle bis

  for (i = 0; i < 101; i++){
    if(i % 2 === 0){
      console.log(i);
    }
  }



    //Exercice 6 : Remplir la piscine

    function calculateVolume(longueur, largeur, profondeur){
      return longueur * largeur * profondeur;     // volume = largeur * longueur * pofondeur

        function calculateTime(v, f){
          return v / f        //f = filling time
        }
        console.log(calculateTime(8, 9))

  }console.log(calculateVolume(4, 6, 7));


  //Exercice 7 : Calculs de cercle

function surfaceCercle(rayon){
    return 3.14 * rayon * rayon;

}console.log(surfaceCercle());

function surfaceCercle(rayon1, rayon2){
  var rayon = Number(prompt("enter valeur du rayon en m"))
  return 3.14 * rayon * rayon;
}console.log(surfaceCercle(4, 3));



//Exercice 8 : Une pyramide

var str = "*";

for(i = 0; i < 5; i++){
  console.log(str);
  str +="*";
}

var str = "";
for (i = 0; i < 4; i++){
  for(j = 0; j <= i; j++){
    str += "*";
  }
  str += "\n";
}
  console.log(str);*/




//Exercice 9 : FIZZ BUZZ

  for (i = 1; i < 100; i++){
    if((i % 3 === 0) !== !){
      console.log("FIZZ");

    }

       if(i % 5 === 0){
        console.log("BUZZ");
      }

       if(i % 3 === 0 && (i % 5 === 0)){
        console.log("FIZZBUZZ");
      }
      console.log(i);
    }



    //Exercice 1 : Un échiquier
    var str = "";
    var str += "\n"
      for (i = 0; i < 8; i++){

        for (j = 0; j < 16; j++){
          if ((i+j)%2 === 0){
            str += "#";
          }else{
            str += "-";
          }
        }
        str += "\n";
      }
        console.log(str);

    //Exercice 2 : Matrix dans la console

    for (i = 0; i < 4; i++){

      for(j = 0; j < 4; j++){

        if (i === j ){
          console.log(1);
        } else {
          console.log(0);
        }

      }
      console.log("-------");

    }




//Exercice 10 : Un jeu en JavaScript
var userScore = 0;
var computerScore = 0;

  while (userScore < 3 && computerScore < 3){
  var userChoice = prompt("Choisissez pierre, feuille, ou sciseaux");
  if(userChoice !== "pierre" && computerChoice !== "feuille" && computerChoice !== "scieaux" || userChoice !== "pierre" && userChoice !== "fueill" && userChoice !== "sciseaux")
    console.log ("rentrez une valeur correcte");
  }else{
    
  }

  var computerChoice= Math.floor(Math.random()*3);

    if(computerChoice < 0.34){
        computerChoice = "pierre";
    } else if(computerChoice <= 0.67){
       computerChoice = "feuille";
    } else {
       computerChoice = "sciseaux";
    }

    if(userChoice == computerChoice){
       return "vous à égalité";
    }
    if(userChoice == "pierre"){
      if(computerChoice == "sciseaux"){
        return "vous avez un point!";
      } else{
        return "ordi a un  point!";
      }
    }
    if(userChoice !== "pierre" && computerChoice !== "feuille" && computerChoice !== "scieaux" || userChoice !== "pierre" && userChoice !== "fueill" && userChoice !== "sciseaux"){
      return
    }
    if(userChoice == "feuille"){
      if(computerChoice == "pierre"){
          return "vous avez un point!";
      } else{
          return "ordi a un point!";
      }
    }
    if(userChoice == "sciseaux"){
      if(computerChoice == "pierre"){
          return "ordi a un point!" ;
      } else{
          return "vous avez un point!" ;
      }
    }
  }
}

alert(runGame());
while ( prompt("vous avez 3 point, Game over") == "") {
}
*/
