// Merge two arrays with duplicate values
// Mesclar dois arrays com valores duplicados

// Write a function that takes two arrays as arguments
// Escreve uma função que recebe dois arrays como argumentos
// Merge both arrays and remove duplicate values
// Mescla ambos os arrays e remove valores duplicados
// Sort the merge result in ascending order
// Ordena o resultado da mesclagem em ordem crescente
// Return the resulting array
// Retorna o array resultante

function myFunction(a, b) {
  let arr = new Set([...a, ...b]);
  arr = Array.from(arr);
  arr = arr.sort((a, b) => a - b);

  return arr;
}

function myFunctionP(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
// [ 1, 2, 3, 4, 5 ]

console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// [ -11, -10, 5, 22, 41,  42, 333]
