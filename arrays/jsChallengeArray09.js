// Sort an array of numbers in descending order
// Classifique um array de números em ordem decrescente

// Write a function that takes an array of numbers as argument
// Escreva uma função que receba um array de números como argumento
// It should return an array with the numbers sorted in descending order
// Deve retornar um array com os números ordenados em ordem decrescente

function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(myFunction([1, 3, 2])); // [3, 2, 1]
console.log(myFunction([1, 3, 2])); // [4, 3, 2, 1]
