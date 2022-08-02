// Add multiple elements to Set
// Adiciona vários elementos ao Set

// Write a function that takes a Set and an array as arguments
// Escreva uma função que recebe um Set e um array como argumentos
// If not already existing, add each element in the array to the Set
// Se ainda não existir, adiciona cada elemento do array ao Set
// Return the modified Set
// Retorna o Set modificado

function myFunction(set, arr) {
  const result = [...set, ...arr];
  return new Set(result);
}

function myFunctionP(set, arr) {
  arr.forEach((e) => set.add(e));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
// Set([1, 2, 3, 4, 5, 6 ])

console.log(myFunction(new Set('12345'), [...'6789']));
// Set([...'123456789'])

console.log(myFunction(new Set([1, 2, 3]), [2, 3]));
// Set([1, 2, 3])
