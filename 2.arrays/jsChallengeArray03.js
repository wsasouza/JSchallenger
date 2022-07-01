// Get last n elements of an array
// Obter os últimos n elementos de um array

// Write a function that takes an array (a) as argument
// Escreva uma função que recebe um array (a) como argumento
// Extract the last 3 elements of a
// Extrai os 3 últimos elementos de um
// Return the resulting array
// Retorna o array resultante

// 2 soluções
function myFunction(a) {
  return a.splice(-3);
}

function myFunctionP(a) {
  return a.slice(-3);
}

//Test Cases
console.log(myFunction([1, 2, 3, 4])); // [2, 3, 4]
console.log(myFunction([5, 4, 3, 2, 1, 0])); //[2, 1, 0]
console.log(myFunction([99, 1, 1])); //[99, 1, 1]
