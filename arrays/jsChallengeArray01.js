// Get nth element of array
// Obter enésimo elemento do array

// Write a function that takes an array (a) and a value (n) as argument
// Escreva uma função que recebe um array (a) e um valor (n) como argumento
// Return the nth element of 'a'
// Retorna o enésimo elemento de 'a'

function myFunction(a, n) {
  return a[n - 1];
}

// Test Cases:
console.log(myFunction([10, 9, 8, 7, 6], 5)); // 6
console.log(myFunction([1, 2, 3, 4, 5], 3)); // 3
console.log(myFunction([7, 2, 1, 6, 3], 1)); // 7
