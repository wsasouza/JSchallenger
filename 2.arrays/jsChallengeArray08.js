// Count number of negative values in array
// Contar o número de valores negativos no array

// Write a function that takes an array of numbers as argument
// Escreva uma função que receba um array de números como argumento
// Return the number of negative values in the array
// Retorna o número de valores negativos no array

function myFunction(a) {
  return a.reduce((acc, n) => (n < 0 ? acc + 1 : acc), 0);
}

function myFunctionP(a) {
  return a.filter((el) => el < 0).length;
}

// Test Cases
console.log(myFunction([1, -2, 2, -4])); // 2
console.log(myFunction([0, 9, 1])); // 0
console.log(myFunction([4, -3, 2, 1, 0])); //1
