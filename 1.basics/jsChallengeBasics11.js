// Basic JavaScript math operators
// Operadores matemáticos básicos de JavaScript

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Escreva uma função que receba 6 valores (a,b,c,d,e,f) como argumentos
// Sum a and b
// Soma a e b
// Then substract by c
// Então subtrai por c
// Then multiply by d and divide by e
// Multiplica por d e divide por e
// Finally raise to the power of f and return the result
// Finalmente aumenta a potência de f e retorna o resultado
// Tipp: mind the order
// Tipp: cuidado com a ordem

function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunction(6, 5, 4, 3, 2, 1)); // 10.5
console.log(myFunction(6, 2, 1, 4, 2, 3)); // 2744
console.log(myFunction(2, 3, 6, 4, 2, 3)); // -8
