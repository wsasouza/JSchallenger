// Creating Javascript objects one
// Criando objetos Javascript um

// Write a function that a string (a) as argument
// Escreva uma função que tenha uma string (a) como argumento
// Create an object that has a property with key 'key' and a value of a
// Cria um objeto que possui uma propriedade com a chave 'key' e um valor de a
// Return the object
// Retorna o objeto

function myFunction(a) {
  return new Object({ key: a });
}

function myFunctionP(a) {
  return { key: a };
}

console.log(myFunction('a')); // {key:'a'}
console.log(myFunction('z')); // {key:'z'}
console.log(myFunction('b')); // {key:'b'}
