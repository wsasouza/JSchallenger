// Define an array with conditional elements
// Definir um array com elementos condicionais

// Write a function that takes an array with arbitrary elements and a number as arguments
// Escreva uma função que recebe um array com elementos arbitrários e um número como argumentos
// Return a new array, the first element should be either the given number itself
// Retorna um novo array, o primeiro elemento deve ser o próprio número fornecido
// or zero if the number is smaller than 6
// ou zero se o número for menor que 6
// The other elements should be the elements of the original array
// Os outros elementos devem ser os elementos do array original
// Try not to mutate the original array
// Tente não alterar o array original

function myFunction(arr, num) {
  let newArr = [];
  newArr = arr.concat(newArr);
  if (num >= 6) {
    newArr.unshift(num);
  } else {
    newArr.unshift(0);
  }
  console.log(arr);
  return newArr;
}

function myFunctionP(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
}

console.log(myFunction([1, 2, 3], 6)); // [6, 1, 2, 3]
console.log(myFunction(['a', 'b'], 2)); // [0,'a','b']
console.log(myFunction([null, false], 11)); // [11, null, false]
