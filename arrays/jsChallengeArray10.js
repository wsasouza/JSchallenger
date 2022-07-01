// Sort an array of strings alphabetically
// Classifique um array de strings em ordem alfabética

// Write a function that takes an array of strings as argument
// Escreve uma função que recebe um array de strings como argumento
// Sort the array elements alphabetically
// Ordena os elementos do array em ordem alfabética
// Return the result
// Retorna o resultado

function myFunction(arr) {
  return arr.sort();
}

//Test Cases
console.log(myFunction(['b', 'c', 'd', 'a'])); // ['a', 'b', 'c', 'd']

console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']
