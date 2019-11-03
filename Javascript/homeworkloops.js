/* Observatii: - inainte de a scrie o linie de cod, specificati un comentariu in care spuneti 
exact procedura pe care o urmati (ex: “declar functia de tip named / function expression care 
accepta argumentele…, declar variabila x, fac comparatia y si verific daca z, samd… ); 
chiar daca nu duceti o functie pana la capat, atasati codul cu comentarii pana la linia la care v-ati oprit;
1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul
curent este par sau impar si va raporta acest lucru in consola. (exemplu: “2 este numar par”);
Scrieti functia in doua variante: while si for

2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica 
numarul curent cu 9 si se va afisa rezultatul. (exemplu: “3*9=27”).
Scrieti functia in doua variante: while si for


 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
(exemplu: 1 * 0 = 0
 1 * 1 = 1
 …
 1 * 10 = 10 )
Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”

4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
dezvoltate la tema anterioara ! */

//exercitiu 1 

//varianta prin for
function myNumbers(number) {           // declar functia
    var i;                          // declar o variabila - functia va itera asupra ei
    for (i = 1; i <= 20; i++) {      // construiesc for-ul pana la numarul 20

        if (i % 2 == 0) {           // adaug un if care sa ma ajute sa afisez mesajul - prima data daca este par
            console.log(i + " este numar par");
        } 
        else {                      // apoi daca nu este par
            console.log(i + " este numar impar");
        }
    }
    return (i);                     // apoi vreau ca for-ul sa execute si sa afiseze functia cand o voi apela
}
console.log(myNumbers());              // apelez functia

//varianta prin while

function myNumber(number){          // declar functia
    i = 0;                           // declar i = 0
    while (i<=20){                   // scriu conditia care face posibila executia functiei
      if (i % 2 == 0) {              // adaug un if care sa ma ajute sa afisez mesajul -> prima data daca este par
        console.log(i + " este numar par"); 
      }
      else {                         // adaug else pentru rezultatul impar
        console.log(i + " este numar impar");
      }
      i++;
    }return (i);
  }
  console.log(myNumber())             // apelez functia


  //exercitiul 2.
// for case
  function nineTimes(num) {         //declar functia
    var a;                          //declar o variabila 'a'
    for (a = 0; a <= 10; a++) {     //stabilesc criteriile lui 'a'
        console.log(a * 9);         //ce vreau sa execute atata timp cat respecta criteriile
    }
    return (a);                     // pentru tot for-ul rezultatul vreau sa fie 'a'
}

 console.log(nineTimes());           //apelez functia in consola


 // while case

 function nineTimes2(numb){      //declar functia
    var a = 0;                   //declar o variabila 'a=0'
    while (a <= 10){             //scriu conditia care face posibila executia functiei
      console.log(a * 9);        //console log de orice nr de la 0 la 10 ori a
      a++;
    } return (a)                 //
  } 
  console.log(nineTimes2());       //apelez functia in consola


  //exercitiul 3.

  