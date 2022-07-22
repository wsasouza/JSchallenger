//Get type of value
//Retornar o tipo da variável

// Write a function that takes a value as argument
// Escreve uma função que recebe um valor como argumento
// Return the type of the value
// Retorna o tipo do valor

function myFunction(a) {
  return typeof a;
}

console.log(myFunction(1)); // 'number'
console.log(myFunction(false)); // 'boolean'
console.log(myFunction({})); // 'object'
console.log(myFunction(null)); // 'object'
console.log(myFunction('string')); // 'string'
console.log(myFunction(['array'])); // 'object'
