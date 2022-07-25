// Check if a number is even
// Verifica se um número é par

// Write a function that takes a number as argument
// Escreve uma função que recebe um número como argumento
// If the number is even, return true
// Se o número for par, retorna true
// Otherwise, return false
// Caso contrário, retorna falso

function myFunction(a) {
  return a % 2 === 0;
}

console.log(myFunction(10)); // true
console.log(myFunction(-4)); // true
console.log(myFunction(5)); // false
console.log(myFunction(-111)); // false
