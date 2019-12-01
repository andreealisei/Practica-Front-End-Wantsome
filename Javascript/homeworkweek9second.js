//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumOfNumbers= limit => {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;
  };
console.log(sumOfNumbers(8));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const longestString = str => {
    let sortedArr = str.split(' ').sort((a, b) => b.length - a.length);
    return sortedArr[0];
  }
  
console.log(longestString("Google is a labrador retriever"));
  
/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = str => { 
let reversed = str.split('').reverse().join(''); 
return reversed; 
}
console.log(reverseString("apple"));
/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const nextLetterStr = str => {
    const nextLet = [];
    const strArr = str.split('');
    for (i = 0; i < strArr.length; i++) {
        let letter = strArr[i].charCodeAt(strArr[i]);
        let nextLetter = letter + 1;
     
        let result = String.fromCharCode(nextLetter);
        
        nextLet.push(result);
    }
    const joined = nextLet.join('');
    return joined;
  }
  console.log(nextLetterStr("Apple"));
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

const convertToTime = nr => Math.floor(nr / 60) + " : " + (nr - 60 * Math.floor(nr / 60));
console.log(convertToTime(64))
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const alphabeticalOrder = string => string.split("").sort().join("");
console.log(alphabeticalOrder("pineapple"))
/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const plusInput = string => {
    let stringArray = string.split('');
    for (let i = 0; i < stringArray.length; i+=2) {
      if (stringArray[i] !== "+") return false; 
    } return true;
  }
  console.log(plusInput("+a+b+c+d+e"));