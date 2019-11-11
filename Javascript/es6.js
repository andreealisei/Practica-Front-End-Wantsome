//  Ex1
//  Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar
//  daca sunt egale sa-mi imulteasca suma lor cu 5
//  ex myFunction(10, 5) - output 15 // myFunction(10, 10) - output 100


function myNumbers (a,b){
  if ( a == b){
    return (a * b) ;
  } else {
    return a + b;
  }
}
console.log(myNumbers(5,10))
  
  //Ex2
  //Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
  //ex testFunction(30, 30) - true 
  //testFunction(15,15) - true
  //testFunction(10, 15) - false
  function myFunction (a,b){
    if ( a == 30 && b == 30){
      return true;
    } 
    else if(a + b === 30){
      return true;
    }
    else {
      return false;
    }
  }
console.log(myFunction(30,30))
  
  //Ex3
  //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
  //checkString('JSisAwsome') - JSisAwsome
  //checkString('isEasy') - JSisEasy
  //checkString(null) - JS
  

  function checkString(string){
    let x = string.includes('JS');
    if (x === true) {
      return string;
    } else {
      return "JS" + string;
    }
  } console.log(checkString(" is NOT easy"))
  
  
  //Ex4
  //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
  //removeDuplicates('aabcdeef') - 'abcdef'
  //removeDuplicates(122334) - 1234
  
  function removeDuplicates(value) {
    let newArray = [];
    for (let i = 0; i < value.length; i++) {
        if (newArray.indexOf(value[i]) == -1) {
            newArray.push(value[i])
        }
    }
    return newArray.join();
}

console.log(removeDuplicates("aabbccdd"));
  
  
  //Ex5
  // Gasiti cel mai lung string intr-o fraza
  //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

  function findLongestString(string){
    var longWord = string.split(" ");
    var result = longWord.sort(function (a,b){
        return b.length - a.length;
    });
    return result[0];
  };
  console.log(findLongestString("Frontend is not easy"));

  //Ex6
  //Scrieti o functie care sa aiba output-ul asta
  // *  
  // * *  
  // * * *  
  // * * * *  
  // * * * * *
  function stars() {
    var result = '';

    for(var i = 0; i < 5; i ++){
        result += ' * ';
        console.log(result);
    }
}
stars();

  //  ex7
  //  const negativeNumbers = [];
  
  //  function extractNegativeNumbers(numbers) {
  //  append any negative numbers found in the numbers array 
  //  into the negativeNumbers array constant variable above
  //  }
  //  extractNegativeNumbers([1,2,-5,4,-6])

  const negativeNumbers = [];

  function extractNegativeNumbers(numbers) {
      // append any negative numbers found in the numbers array
      // into the negativeNumbers array constant variable above
      var p = 0;
      for(var i = 0; i < numbers.length; i++){
          if( numbers[i] < 0)
              negativeNumbers[p++] = numbers[i];
      }
  
      return negativeNumbers;
  }
  console.log(extractNegativeNumbers([1,2,-5,4,-6]));

  // ex8
  // Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
  // ex calculate(2, 5, "add") => 7
  // calculate(10, 8, "substract") => 2
 function myFunction( n1, n2, str){
   switch (true){
    case str === "add": return (n1 +n2);
    break;
    case str === "substract": return (n1-n2);
    break;
    case str === "multiply": return (n1*n2);
    break;
    case str === "divide": return (n1/n2);
    break;
   }
 }
 console.log(myFunction(8,9, "multiply"))
 /*function myFunction(n1, n2, str){
  if (str === "add"){
    
   return ( n1 + n2);
  } 
  else if(str === "substract") {
  return ( n1 - n2);
   }
  else if (str === "multiply")  {
    return ( n1 * n2);
  }
  else if(str === "divide"){
  return (n1 /n2); 
  }
}
console.log(myFunction(2,3,"multiply"))*/
  
  //Ex9
  // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca
  // nu este cu niciunul sa returneze numarul
  // isDiv(15) => "BOTH"
  // isDiv(9)=> "THREE"
  // isDiv(7)=> 7
  function dividedBy(nr){
    if ( nr % 3 ===0 && nr % 5 === 0){
      return "BOTH";
    }
    else if( nr % 3 ===0){
      return "THREE";
    }
    else if ( nr %5 ===0){
      return "FIVE";
    }
    else {
      return nr;
    }
  }
  console.log(dividedBy(3))
 
  //Master exercises

  //Ex9 
  // Vreau sa pot afisa data si ziua sub urmatorul format:
  // Azi este : Luni.

  // Ora este : 20 PM : 30 : 38


  //   let today = new Date().toLocaleDateString();
  //   let days = ["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"];
  //   var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
  // console.log(today);
   

  
  //ex10
  // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
  // validPin("1234") => true
  // validPin("12345") => false
  // validPin("z23f") => false

  
 function validPin(string){
  if (string.length === 4){
    return true;
  } else if ( string.length === 6) {
    return false;
  } else{
    return false;
  }
}
  console.log(validPin("1234"))
  
  //ex11 
  //Folosind regex vreau sa scot toate vocalele dintr-un string
  // removeVowels("Hey I am developer") => "Hy m dvlpr"

  function removeVowels(string){
  return string.replace(/[aeiou]/g, "");
}
console.log(removeVowels("Gasca"))

  
  //ex12
  //Vreau sa am o functie care sa verifice daca un numar este patrat
  // isSquareNumber(-1) => false
  // isSquareNumber(25) => true
  // isSquareNumber(3) => false

function isSquareNumber(number) {
    if (number > 0 && Math.sqrt(number) % 1 === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
}
  
  isSquareNumber(-1);
  isSquareNumber(25);
  isSquareNumber(3);
  
  //ex13
  // Vreau sa am o functie care sa verifice daca un cuvant este o anagrama - daca toate literele din primul string se regasesc in al doilea
  // isAnagram("School master", "The class room") => true
  // isAnagram("silent", "listen") => true


function isAnagram(a, b) {

  var x = a.split("").sort().join("")
  var y = b.split("").sort().join("")

  return x === y;
}

  console.log(isAnagram("School master", "The class room"));
  console.log(isAnagram("silent", "listen"));