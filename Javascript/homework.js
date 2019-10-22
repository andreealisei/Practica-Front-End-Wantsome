//1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(input){
    //if (Object.prototype.toString.call(input) === '[object String]')
    var result = ( typeof input === 'string')
    return result
    }
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


//2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(input){
    var result = (input.length === 0)
    return result
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));
//true
//False

//3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function string_to_array(str){
    var result = str.split(' ');
    return result;
}
console.log(string_to_array("Robin Singh"));
//["Robin", "Singh"]

//4. Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(str){
    var name = str.trim().split(" ");
    if (name.length > 1) {
        return (name[0] + " " + name[1].charAt(0) + ".");
    }
}
console.log(abbrev_name("Robin Singh"));
//"Robin S."

//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare )
function capitalize(string){
    var result =  string.charAt(0).toUpperCase() + string.slice(1)
    return result;
}
console.log(capitalize('js string exercises'));
//"Js string exercises"

//6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
function truncate_string(name){
  var example = name.substr(0,4)
  return example;
}
console.log(truncate_string("Robin Singh",4));
//"Robi"

//7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt(string, index){
    return string.charAt(index).toUpperCase(0) === string.charAt(index)
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
//false

//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(firstString, secondString, position){
    // afla pozitia position din firstString
    // insereaza secondString la pozitia position
    // returneaza rezultatul

    var slice1 = firstString.slice(0, position)
    var slice2 = firstString.slice(position )
 
    var result = [slice1, secondString, slice2].join('')
    return result

    // var result = firstString.slice(0, position) + secondString
    // solutie care merge via SO
    // var result = [firstString.slice(0, position), secondString, firstString.slice(position)].join(''); 
}
console.log(insert('We are doing some exercises.','JavaScript ',18));
console.log(insert('We are doing some exercises.', 'JavaScript ', 0));
//"We are doing some exercises."
//"JavaScript We are doing some exercises."
//"We are doing some JavaScript exercises."

//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(str1, str2){
  var without = str1.replace(str2, '')
  return without
  // var index  = str1.indexOf(str2) slice
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
//"The quick brown fox jumps over lazy dog"

//10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(example1, example2){
    var compare = example1.toUpperCase() === example2.toUpperCase()
    return compare
}
console.log(compare_strings('abcd', 'AbcD'));
//true

//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(string){
    var example = string.toLowerCase(0)
    return example;
}
console.log(Uncapitalize('Js string exercises'));
//"js string exercises"