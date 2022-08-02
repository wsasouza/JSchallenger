// Check if value is present in Set
// Verifica se o valor está presente no Set

// Write a function that takes a Set and a value as arguments
// Escreva uma função que recebe um Set e um valor como argumentos
// Check if the value is present in the Set
// Verifica se o valor está presente no Set

function myFunction(set, val) {
  return set.has(val);
}

console.log(myFunction(new Set([1, 2, 3]), 2)); // true
console.log(myFunction(new Set([123]), 2)); // false
console.log(myFunction(new Set(['1', '2', '3']), '2')); // true
console.log(myFunction(new Set('123'), '2')); // true
