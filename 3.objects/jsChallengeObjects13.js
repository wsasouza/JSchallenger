// Check if property exists in object and is truthy
// Verifica se a propriedade existe no objeto e é verdadeira

// Write a function that takes an object (a) and a string (b) as argument
// Escreva uma função que recebe um objeto (a) e uma string (b) como argumento
// Return true if the object has a property with key 'b', but only if it has a truthy value
// Retorna true se o objeto tiver uma propriedade com a chave 'b', mas somente se tiver um valor true
// In other words, it should not be null or undefined or false
// Em outras palavras, não deve ser null ou undefined ou false
// Return false otherwise
// Retorna false caso contrário

function myFunction(a, b) {
  return !a[b];
}

function myFunctionP(a, b) {
  return Boolean(a[b]);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y')); // false
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z')); // false
