// Get first n elements of an array
// Obter os primeiros n elementos de um array

// Write a function that takes an array (a) as argument
// Escreva uma função que recebe um array (a) como argumento
// Extract the first 3 elements of a
// Extrai os 3 primeiros elementos de um
// Return the resulting array
// Retorna o array resultante

function myFunction(a) {
  return a.slice(0, 3);
}

console.log(myFunction([1, 2, 3, 4])); // [1, 2, 3]
console.log(myFunction([5, 4, 3, 2, 1, 0])); // [5, 4, 3]
console.log(myFunction([99, 1, 1])); // [99, 1, 1]
