// Return the percentage of a number
// Retorna a porcentagem de um número

// Write a function that takes two numbers (a and b) as argument
// Escreva uma função que receba dois números (a e b) como argumento
// Return b percent of a
// Retorna b por cento de a

function myFunction(a, b) {
  return (a / 100) * b;
}

function myFunctionP(a, b) {
  return (b / 100) * a;
}

console.log(myFunction(100, 50)); // 50
console.log(myFunction(10, 1)); // 0.1
console.log(myFunction(500, 25)); // 125
