// Remove last n characters of string
// Remove os últimos n caracteres da string

// Write a function that takes a string (a) as argument
// Escreva uma função que recebe uma string (a) como argumento
// Remove the last 3 characters of a
// Remove os 3 últimos caracteres de a
// Return the result
// Retorna o resultado

function myFunction(a) {
  return a.slice(0, -3);
}

console.log(myFunction('abcdefg')); // 'abcd'
console.log(myFunction('1234')); // '1'
console.log(myFunction('fgedcba')); // 'fged'
