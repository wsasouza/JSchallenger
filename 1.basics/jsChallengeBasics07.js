// Get first n characters of string
// Obtém os primeiros n caracteres da string

// Write a function that takes a string (a) as argument
// Escreva uma função que recebe uma string (a) como argumento
// Get the first 3 characters of a
// Pega os 3 primeiros caracteres de um
// Return the result
// Retorna o resultado

function myFunction(a) {
  return a.slice(0, 3);
}

console.log(myFunction('abcdefg')); // 'abc'
console.log(myFunction('1234')); // '123'
console.log(myFunction('fgedcba')); // 'fge'
