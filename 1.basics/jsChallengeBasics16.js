// Multiplication, division, and comparison operators
// Operadores de multiplicação, divisão e comparação

// Write a function that takes two numbers (a and b) as arguments
// Escreva uma função que receba dois números (a e b) como argumentos
// If a is smaller than b, divide a by b
// Se a for menor que b, divide a por b
// Otherwise, multiply both numbers
// Caso contrário, multiplique os dois números
// Return the resulting value
// Retorna o valor resultante

function myFunction(a, b) {
  return a < b ? a / b : a * b;
}

console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); // 4050
console.log(myFunction(8, 20)); // 0.4
console.log(myFunction(2, 0.5)); // 1
