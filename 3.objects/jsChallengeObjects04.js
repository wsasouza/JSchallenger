// Check if property exists in object
// Verifica se a propriedade existe no objeto

// Write a function that takes an object (a) and a string (b) as argument
// Escreva uma função que recebe um objeto (a) e uma string (b) como argumento
// Return true if a has a property with key b
// Retorna true se a tiver uma propriedade com a chave b
// Return false otherwise
// Retorna false caso contrário

function myFunction(a, b) {
  return Object.hasOwn(a, b);
}

function myFunctionP(a, b) {
  return b in a;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'z')); // true
