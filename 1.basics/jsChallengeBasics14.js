// How many times does a character occur?
// Quantas vezes um caractere ocorre?

// Write a function that takes two strings (a and b) as arguments
// Escreva uma função que receba duas strings (a e b) como argumentos
// Return the number of times a occurs in b
// Retorna o número de vezes que a ocorre em b

function myFunction(a, b) {
  return b.split('').filter((el) => el === a).length;
}

function myFunctionP(a, b) {
  return b.split(a).length - 1;
}

console.log(
  myFunction('m', 'how many times does the character occur in this sentence?')
); // 2

console.log(
  myFunction('h', 'how many times does the character occur in this sentence?')
); // 4

console.log(
  myFunction('?', 'how many times does the character occur in this sentence?')
); // 1

console.log(
  myFunction('z', 'how many times does the character occur in this sentence?')
); // 0
