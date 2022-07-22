//Comparison operators, strict equality
//Operadores de comparação, igualdade estrita

// Write a function that takes two values, say a and b, as arguments
// Escreva uma função que receba dois valores, digamos a e b, como argumentos
// Return true if the two values are equal and of the same type
// Retorna true se os dois valores forem iguais e do mesmo tipo

function myFunction(a, b) {
  return a === b;
}

console.log(myFunction(2, 3)); // false
console.log(myFunction(3, 3)); // true
console.log(myFunction(1, '1')); // false
console.log(myFunction('10', '10')); // true
