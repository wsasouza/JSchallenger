// Get every nth element of array
// Obter cada enésimo elemento do array

// Write a function that takes an array (a) and a value (n) as arguments
// Escreva uma função que recebe um array (a) e um valor (n) como argumentos
// Save every nth element in a new array
// Salva cada enésimo elemento em um novo array
// Return the new array
// Retorna o novo array

function myFunction(a, n) {
  let arr = [];
  let next = n;
  for (let i = 0; i <= a.length; i++) {
    if (i === next) {
      arr.push(a[i - 1]);
      next += n;
    }
  }
  return arr;
}

function myFunctionP(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// [3,6,9]
console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
// [6,1]
console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));
// [2,6,4,8,10]
