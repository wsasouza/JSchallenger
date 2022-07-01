// Return the average of an array of numbers
// Retorna a média de um array de números

// Write a function that takes an array of numbers as argument
// Escreva uma função que receba um array de números como argumento
// It should return the average of the numbers
// Deve retornar a média dos números

function myFunction(arr) {
  let soma = arr.reduce((acc, number) => acc + number, 0);
  return soma / arr.length;
}

function myFunctionP(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

//Test Cases
console.log(myFunction([10, 100, 40])); // 50
console.log(myFunction([10, 100, 1000])); // 370
console.log(myFunction([-50, 0, 50, 200])); // 50
