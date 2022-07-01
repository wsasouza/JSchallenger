// Merge an arbitrary number of arrays
// Mesclar um número arbitrário de arrays

// Write a function that takes arguments an arbitrary number of arrays
// Escreva uma função que recebe argumentos de um número arbitrário de arrays
// It should return an array containing the values of all arrays
// Deve retornar um array contendo os valores de todos os arrays

function myFunction(...arrays) {
  return arrays.flat();
}

console.log(myFunction([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
// ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ['a', 'b']));
// [true, true, 1, 2, 'a', 'b']
