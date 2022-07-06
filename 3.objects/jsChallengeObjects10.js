// Remove a property from an object
// Remove uma propriedade de um objeto

// Write a function that takes an object as argument
// Escreve uma função que recebe um objeto como argumento
// It should return an object with all original object properties
// Deve retornar um objeto com todas as propriedades originais do objeto
// except for the property with key 'b'
// exceto para a propriedade com a chave 'b'

function myFunction(obj) {
  delete obj.b;
  return obj;
}

function myFunctionP(obj) {
  const { b, ...rest } = obj;
  return rest;
}

console.log(myFunction({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
console.log(myFunction({ b: 0, a: 7, d: 8 })); // { a: 7, d: 8 }
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 })); // { e: 6, f: 4, a: 3 }
