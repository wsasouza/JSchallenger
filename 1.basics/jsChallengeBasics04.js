// Get nth character of string
// Obtém o enésimo caractere da string

// Write a function that takes a string (a) and a number (n) as argument
// Escreva uma função que recebe uma string (a) e um número (n) como argumento
// Return the nth character of 'a'
// Retorna o enésimo caractere de 'a'

function myFunction(a, n) {
  return a.charAt(n - 1);
}

function myFunctionP(a, n) {
  return a[n - 1];
}

console.log(myFunction('abcd', 1)); // 'a'
console.log(myFunction('zyxbwpl', 5)); // 'a'
console.log(myFunction('gfedcba', 3)); // 'a'
