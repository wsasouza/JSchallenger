// Return last n array elements
// Retorna os últimos n elementos do array

// Write a function that takes an array (a) and a number (n) as arguments
// Escreva uma função que recebe um array (a) e um número (n) como argumentos
// It should return the last n elements of a
// Deve retornar os últimos n elementos de a

function myFunction(a, n) {
  return a.slice(-n);
}

// Test Cases
console.log(myFunction([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]
console.log(myFunction([1, 2, 3], 6)); // [ 1, 2, 3 ]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [ 6, 7, 8 ]
