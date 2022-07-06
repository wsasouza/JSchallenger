// Sum object values
// Somar os valores do objeto

// Write a function that takes an object (a) as argument
// Escreva uma função que recebe um objeto (a) como argumento
// Return the sum of all object values
// Retorna a soma de todos os valores do objeto

function myFunction(a) {
  return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

console.log(myFunction({ a: 1, b: 2, c: 3 })); // 6
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 })); // 18
console.log(myFunction({ w: 15, x: 22, y: 13 })); // 50
