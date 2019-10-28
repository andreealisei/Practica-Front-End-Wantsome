/*Tema JS - Function declaration types and Conditionals
- Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor !
- Se va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.
- Fiecare functie trebuie sa fie precedata de un comentariu pe mai multe linii in care veti descrie 
sub forma de pseudocod logica functiei

1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul 
unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata 
este de sexul M/F". */

function verifyGender(number){
  var num = number;
  var gender = num.toString();
  var sex = gender[0];
  
  if ( sex == 1 ){
      return "Persoana verificata este de sexul M";
  }
  else if ( sex == 2) {
      return "Persoana verificata este de sexul F ";
      }
  else { return "necunoscut";
       }
}
      console.log(verifyGender(291112400723));
/* -am definit functia cu paramentru number, am adaugat variabilele num, gender si sex, pentru 
a ajunge la variabila finala sex, un string al carui prim caracter vrem sa vedem daca e 1(M) sau 2(F).
   -in prima conditie, am specificat ca daca primul caracter este 1 atunci sexul va fi Masculin
   -in conditia secunda, am specificat ca daca al doilea caracter este 2 atunci sexul va fi Feminin.
   -orice caracter care nu va fi nici 1 nici 2, va fi definit ca si necunoscut.
   -argumentul din console log este un CNP pt sexul feminin.

2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica 
cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este 
[calificativ]". */

var calificativ = function(a) {
    if (a === 1 || a === 2 || a ===3) {
        return "Calificatul corespunzator punctajului " + a  + " este E";
    }
    else if ( a === 4 || a === 5 || a ===6 ){
        return "Calificatul corespunzator punctajului " + a  + " este D";
    }
    else if ( a === 7 || a === 8) {
        return "Calificatul corespunzator punctajului " + a  + " este B";
    }
    else if ( a ===9 ) {
        return "Calificatul corespunzator punctajului " + a  + " este A";
    }
    else if ( a === 10) {
        return "Calificatul corespunzator punctajului " + a  + " este A+";
    }
    else {
        return "insuficient";
    }
}
 console.log(calificativ(5));
 /* - am definit o variabila cu functie si parametru(a), care are urmatoarele cazuri : daca argumentul este
 = cu 1,2 sau 3 atunci calificativul va fi E, daca argumentul este = 4, 5 sau 6 atunci calificativul va fi D,
 daca argumentul va fi = 7 sau 8 calificativul va fi B, daca va fi = 9 calificatvul va fi A, iar daca argumentul = 10
 atunci calificativul este A+, orice altceva va fi insuficient.
 -iar in consola am apelat functia cu argumentul 5, iar rezultatul este"Calificatul corespunzator punctajului 5 este D"

/*3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text 
de forma: "Marca [marca] se produce in [tara]". Trebuie sa aveti macar 6 cazuri. In cazul in 
care functia nu recunoaste marca, va returna "Marca este necunoscuta. " Scrieti codul in 3 variante 
diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. Una dintre implementari 
trebuie sa fie bazata pe Object Literals
 ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )*/

 var car = function(marca){
    if (marca === "dacia") {
      return "Marca " + marca + " se produce in Romania";
    }
    else if ( marca === "fiat") {
      return "Marca " + marca + " se produce in Italia";
    }
    else if ( marca === "tesla") {
      return "Marca " + marca + " se produce in SUA";
    }
    else if ( marca === "bmw") {
      return "Marca " + marca + " se produce in Germania";
    }
    else if ( marca === "range") {
      return "Marca " + marca + " se produce in UK";
    }
    else if ( marca === "honda") {
      return "Marca " + marca + " se produce in Japonia";
    }
    else {
      return "Marca " + marca + " este necunoscuta"
    }
  }
console.log(car("fiat"));

function myCar(marca) {
  
    if (marca === "dacia") {
      return "Marca " + marca + " se produce in Romania";
    }
    else if ( marca === "fiat") {
      return "Marca " + marca + " se produce in Italia";
    }
    else if ( marca === "tesla") {
      return "Marca " + marca + " se produce in SUA";
    }
    else if ( marca === "bmw") {
      return "Marca " + marca + " se produce in Germania";
    }
    else if ( marca === "range") {
      return "Marca " + marca + " se produce in UK";
    }
    else if ( marca === "honda") {
      return "Marca " + marca + " se produce in Japonia";
    }
    else {
      return "Marca " + marca + " este necunoscuta"
    }
  }
console.log(myCar("honda"));
/*
am incercat la Obj Literals, dar nu imi da de nicio culoare

function carType (marca) {
  var cars = {
    'audi':function(){
      return 'Germany';
    },
    'dacia':function(){
    return 'Romania'
  }
  };
  return cars[marca]();
}
  var car = carType('audi');
console.log("Marca se produce in " + car);*/



/*4. Scrieti o functie de tip IIFE care:
- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];
- afiseaza in consola array-ul sortat*/
var cars = [
    { name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
   ];
  
cars.sort(function(a,b) { 
    return a.salary - b.salary;
});
console.log(cars);
/*Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. 
Verificarea se va face prin deschiderea paginii html in browser.
*/
