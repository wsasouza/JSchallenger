// Creating Javascript objects two
// Criando objetos Javascript dois

// Write a function that takes two strings (a and b) as arguments
// Escreva uma função que receba duas strings (a e b) como argumentos
// Create an object that has a property with key 'a' and a value of 'b'
// Cria um objeto que possui uma propriedade com a chave 'a' e um valor de 'b'
// Return the object
// Retorna o objeto

function myFunction(a, b) {
  return new Object({ [a]: b });
}

function myFunctionP(a, b) {
  return { [a]: b };
}

console.log(myFunction('a', 'b')); // {a:'b'}
console.log(myFunction('z', 'x')); // {z:'x'}
console.log(myFunction('b', 'w')); // {b:'w'}
