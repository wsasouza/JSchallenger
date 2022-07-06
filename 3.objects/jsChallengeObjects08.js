// Extract keys from Javascript object
// Extrair chaves do objeto Javascript

// Write a function that takes an object (a) as argument
// Escreva uma função que recebe um objeto (a) como argumento
// Return an array with all object keys
// Retorna um array com todas as chaves de objeto

function myFunction(a) {
  return Object.keys(a);
}

console.log(myFunction({ a: 1, b: 2, c: 3 })); // ['a','b','c']
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 })); // ['j','i','x','z']
console.log(myFunction({ w: 15, x: 22, y: 13 })); // ['w','x','y']
