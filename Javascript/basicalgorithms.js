//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau 
//"ovid...@test.com"
//-am scris functia cu un parametru, am spart stringul in 2 array[0,1], apoi am returnat primul
// array[0] din care am dat slice doar la primele 4 litere + ...+@ + al doilea array[1]

function protectUser(email){
  
    var half = email.split("@");
      
    return half[0].slice(0,4) +"..." +'@' + half[1];
    }
    console.log(protectUser('andreealisei@gmail.com'))

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
//am scris functia cu parametrul string
//am stocat o variabila stringAr prin care transformam stringul in Array
//am stocat o noua variabila - aici ca va stoca rezultatul
//
function firstCapital(string){
    var stringAr = string.split(' ');
    var rezultat = [];
    for (i = 0, len = stringAr.length; i < len; i++){
    rezultat.push(stringAr[i].charAt(0).toUpperCase()+ stringAr[i].slice(1).toLowerCase()+ ' ');
    }
 return rezultat.join(" ");
}
console.log(firstCapital("I am super"));


//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
//-am scris functia cu parametrul letters, am adaugat o variabila unde se va stoca noul rezultat
//- pentru parametru care are litera mica, sa se transforme in litera mare,
//pentru orice alt caz litera se face litera mica
function swapCase(letters){
    var newLetters = "";
    for ( i=0; i<letters.length; i++){
      if ( letters[i] === letters[i].toLowerCase()){
        newLetters += letters[i].toUpperCase();
      }
      else {
        newLetters += letters[i].toLowerCase();
      }
    }
    return newLetters;
  }
 console.log(swapCase("gOOgLe ThE dOG"))

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
//-am creat o variabila care contine parametrul ce se va repeta;
//-folosim while loop, cu conditia ca : atata timp cat time este mai mare ca 0, 
//functia se va executa 'repeatedString = repeatedString + string';
function repeatedStringNumTimes(string, time){
    var repeatedString = " ";
    while ( time > 0 ) {
      repeatedString += string;
      time--;
    }
    return repeatedString;
  }
  console.log(repeatedStringNumTimes("Wantsome", 2));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
//-dupa ce am scris functia si am ales un parametru
//-am stocat o variabila noua in care eliminam caracterele nedorite [ -;.'/,]
//-am facut o variabila noua in care transformam stringul in litere mici si inlocuim caracterele
//de mai sus nedorite cu ''nimic
//-in a treia variabila stringul de mai sus il facem array.il inversam si apoi il facem din nou string
//-returnam stringul din variabila precedenta si comparam cu stringul trandormat in litere mici de la inceput
  function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("level"));
  console.log(palindrome("mom"));
  console.log(palindrome("racecar"));
  console.log(palindrome("pixel")); //exemplu false

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array:
//-am creat o variabila unde sa stocam toate numerele dorite din array uri
//-pentru a accesa toate arrayiurile folosim arr[], folosim Math.max() pentru a alege cel mai mare nr din fiecare array
//-operatorul "..." vor face ca elementele din arrays sa fie argumente pentru Math.max();
//-dam push fiecarui numar (cel mai mare din arrays) catre answer[]
function largestOfFour(arr) {
    var answer = []
    for (let i = 0; i < arr.length; i++) {
      answer.push(Math.max(...arr[i]))
    }
    return answer
  }
   console.log(largestOfFour([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
//Ex7
// Implementati o functie care face reverse la un string
// -realizam o variabila care transforma stringul in array, fiind o proprietate care functioneaza pe array uri
// -
function myFunction(string){
    var arString = string.split('');
    var ar = arString.reverse('');
    var result = ar.join('');
    return result;
  }
  console.log(myFunction("black"))
//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function factorial (n) {
    if (n === 0) { 
     return 1;
    }else{
      return n * factorial(n - 1) 
    }
    }
   console.log(factorial(3)); //returns 6
   console.log(factorial(4)); //returns 24
   

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function endLetter(string, g){
    var result = string.endsWith(g);
    return result;
  }
  console.log(endLetter("computer","r"));


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat
function findElement(arr, func) {
    var num;
    
    for(var i = 0; i <arr.length; i++) {
      
      if(func(arr[i]) === true) {
        num = arr[i];
        
        return num;
        
      }
    }
  }
  console.log(findElement([1, 3, 4], function(num){ return num % 2 === 0; }))

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
