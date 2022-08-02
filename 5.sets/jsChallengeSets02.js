// Convert a Set to Array
// Converte um conjunto em array

// Write a function that takes a Set as argument
// Escreve uma função que recebe um Set como argumento
// Convert the Set to an Array
// Converte o conjunto em um array
// Return the Array
// Retorna a matriz

function myFunction(set) {
  return Array.from(set);
}

function myFunctionP(set) {
  return [...set];
}

console.log(myFunction(new Set([1, 2, 3]))); // [1, 2, 3]
console.log(myFunction(new Set([123]))); // [123]
console.log(myFunction(new Set(['1', '2', '3']))); // ['1', '2', '3']
console.log(myFunction(new Set('123'))); // ['1', '2', '3']
