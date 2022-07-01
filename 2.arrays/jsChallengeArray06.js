// Remove a specific array element
// Remover um elemento de array específico

// Write a function that takes an array (a) and a value (b) as argument
// Escreva uma função que recebe um array (a) e um valor (b) como argumento
// The function should clean a from all occurrences of b
// A função deve limpar a de todas as ocorrências de b
// Return the filtered array
// Retorna o array filtrado

function myFunction(a, b) {
  return a.filter((el) => el !== b);
}

//Test Cases
console.log(myFunction([1, 2, 3], 2)); // [1, 3]
console.log(myFunction([1, 2, '2'], '2')); // [1, 2]
console.log(myFunction([false, '2', 1], false)); // ['2', 1]
console.log(myFunction([1, 2, '2', 1], 1)); // [2, '2']
