// Get last n characters of string
// Obtém os últimos n caracteres da string

// Write a function that takes a string as argument
// Escreve uma função que recebe uma string como argumento
// Extract the last 3 characters from the string
// Extrai os últimos 3 caracteres da string
// Return the result
// Retorna o resultado

function myFunction(str) {
  return str.slice(-3);
}

console.log(myFunction('abcdefg')); // 'efg'
console.log(myFunction('1234')); // '234'
console.log(myFunction('fgedcba')); // 'cba'
