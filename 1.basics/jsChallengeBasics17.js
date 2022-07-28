// Round a number to 2 decimal places
// Arredonda um número para 2 casas decimais

// Write a function that takes a number (a) as argument
// Escreva uma função que recebe um número (a) como argumento
// Round a to the 2nd digit after the comma
// Arredonda a para o 2º dígito após a vírgula
// Return the rounded number
// Retorna o número arredondado

function myFunction(a) {
  return +Number.parseFloat(a).toFixed(2);
}

function myFunctionP(a) {
  return Number(a.toFixed(2));
}

console.log(myFunction(2.12397)); // 2.12
console.log(myFunction(3.136)); // 3.14
console.log(myFunction(1.12397)); // 1.12
console.log(myFunction(26.1379)); // 26.14
