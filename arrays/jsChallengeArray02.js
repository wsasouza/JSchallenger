// Remove first n elements of an array
// Remova os primeiros n elementos de um array

// Write a function that takes an array (a) as argument
// Escreva uma função que recebe um array (a) como argumento
// Remove the first 3 elements of 'a'
// Remove os 3 primeiros elementos de 'a'
// Return the result
// Retorna o resultado

// 2 soluções
function myFunction(a) {
  return a.splice(3);
}

// O método splice() altera o conteúdo de uma lista, adicionando novos
// elementos enquanto remove elementos antigos.

function myFunctionP(a) {
  return a.slice(3);
}

// O método slice() retorna uma cópia de parte de um array a partir de um
// subarray criado entre as posições início e fim (fim não é necessário)
// de um array original. O Array original não é modificado.

//Test Cases
console.log(myFunction([1, 2, 3, 4])); // [4]
console.log(myFunction([5, 4, 3, 2, 1, 0])); // [2, 1, 0]
console.log(myFunction([99, 1, 1])); // []
