// Extract first half of string
// Extrai a primeira metade da string

// Write a function that takes a string (a) as argument
// Escreva uma função que recebe uma string (a) como argumento
// Extract the first half a
// Extraia a primeira metade de um
// Return the result
// Retorna o resultado

function myFunction(a) {
  return a.slice(0, half);
}

function myFunctionP(a) {
  return a.slice(0, a.length / 2);
}

console.log(myFunction('abcdefgh')); // 'abcd'
console.log(myFunction('1234')); // '12'
console.log(myFunction('gedcba')); // 'ged'
