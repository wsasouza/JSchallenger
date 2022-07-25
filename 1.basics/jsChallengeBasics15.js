// Check if a number is a whole number
// Verifica se um número é um número inteiro

// Write a function that takes a number (a) as argument
// Escreva uma função que recebe um número (a) como argumento
// If a is a whole number (has no decimal place), return true
// Se a for um número inteiro (sem casa decimal), retorna true
// Otherwise, return false
// Caso contrário, retorna falso

function myFunction(a) {
  return Number.isInteger(a);
}

function myFunctionP(a) {
  return a - Math.floor(a) === 0;
}

console.log(myFunction(4)); // true
console.log(myFunction(1.123)); // false
console.log(myFunction(1048)); // true
console.log(myFunction(10.48)); // false
