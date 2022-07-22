// Calculate the sum of an array of numbers
// Calcula a soma de um array de números

// Write a function that takes an array of numbers as argument
// Escreva uma função que receba um array de números como argumento
// It should return the sum of the numbers
// Deve retornar a soma dos números

function myFunction(a) {
  return a.reduce((sum, item) => sum + item, 0);
}

console.log(myFunction([10, 100, 40])); // 150
console.log(myFunction([10, 100, 1000, 1])); // 1111
console.log(myFunction([-50, 0, 50, 200])); // 200
