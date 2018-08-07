//exercices js

//exercice 1


/*console.log("Hello" + " " "Word");

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
var x = "mudather";
console.log(Boolean(x));

var y = "";
cosole.log(Boolean(y));*/


//exercice 2 Calculer mon âge

/*var nb1 = Number(prompt("Quelle est l'anné acctuelle?"));
var nb2 = prompt("Quelle est votre date de naissance");
  alert(nb1-nb2 + "ans");*/


/*exercice 3 Problème de chaussures
var amt1 = 70;
var amt2 = 59;
var amt3 = 20;
var dis = 20;
console.log((amt1 + amt2 + amt3)*20/100);*/

//exercice 4  une calculatrice JavaScript//

/*var nb1 = prompt("quel est le première nombre à additonnner");
var nb2 = prompt("quel est le deuxième nmbre à additonnner ");
var total = Number(nb1) + Number(nb2);
  alert(total);*/


  //exercice 5 travailler avec les propriétés
  /*var firstName = prompt("entrez votre prenom");
   alert(firstName[0].toUpperCase() + firstName.slice(-1).toUpperCase());

   var lastName = prompt("entrez votre nom");
    alert(lastName[0].toUpperCase() + lastName.slice(-1).toUpperCase());*/

/*Exercice 1 : Le nombre le plus grand

var valeur1 = 20;
var valeur2 = 30;
var valeur3 = 21;
var valeur4 = 100;
console.log(Math.max(valeur1, valeur2, valeur3, valeur4));*/

//Exercice 2 : Condition d'âge

/*var utlisateur = Number(prompt("entrez votre âge"));

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
}*/


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


/*var nbHidden = 8;
var nbpleur = prompt("tappez votre réponse");
while( nbPleur != 8){
  if(nbPleur < 8){
    console.log("votre reponse est plus petite");
    var nbpleur = prompt("tappez votre réponse");

  var nbPluer = prompt("8");
  }

}
  console.log(gagné);*/




var str = "";
var str += "\n"
  for{
    (i = 0; i < 4; i++);
    for (j = 0; j < 4; j++){
      if ((i+j)%2 === 0){
        str += "#";
      }else{
        str += "-";
      }
    }
    str += "\n";
  }

  console.log(str);

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
  console.log(str);
