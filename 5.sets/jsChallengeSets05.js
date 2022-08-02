// Delete element from Set
// Excluir elemento do conjunto

// Write a function that takes a Set and a value as argument
// Escreve uma função que recebe um Set e um valor como argumento
// If existing in the Set, remove the value from the Set
// Se existir no Set, remove o valor do Set
// Return the result
// Retorna o resultado

function myFunction(set, val) {
  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
// Set([2, 3])

console.log(myFunction(new Set('12345'), '3'));
// Set(['1', '2', '4', '5'])

console.log(myFunction(new Set([1, 2, 3]), 4));
// Set([1, 2, 3])
