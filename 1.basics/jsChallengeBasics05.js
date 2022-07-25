// Remove first n characters of string
//Remove os primeiros n caracteres da string

// Write a function that takes a string (a) as argument
// Escreva uma função que recebe uma string (a) como argumento
// Remove the first 3 characters of a
// Remove os 3 primeiros caracteres de um
// Return the result
// Retorna o resultado

function myFunction(a) {
  return a.substring(3);
}

function myFunctionP(a) {
  return a.slice(3);
}

console.log(myFunction('abcdefg')); // 'defg'
console.log(myFunction('1234')); // '4'
console.log(myFunction('fgedcba')); // 'dcba'
