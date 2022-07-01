// Check if all array elements are equal
// Verifique se todos os elementos do array são iguais

// Write a function that takes an array as argument
// Escreve uma função que recebe um array como argumento
// It should return true if all elements in the array are equal
// Deve retornar true se todos os elementos do array forem iguais
// It should return false otherwise
// Deve retornar false caso contrário

function myFunction(arr) {
  let isEqual = false;
  let firstElement = arr[0];
  arr.forEach((a) => (isEqual = a === firstElement));
  return isEqual;
}

function myFunctionP(arr) {
  return new Set(arr).size === 1;
}

//Test Cases
console.log(myFunction([true, true, true, true])); // true
console.log(myFunction(['test', 'test', 'test'])); // true
console.log(myFunction([1, 1, 1, 2])); // false
console.log(myFunction(['10', 10, 10, 10])); // false
