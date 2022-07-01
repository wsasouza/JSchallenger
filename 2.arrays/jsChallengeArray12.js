// Return the longest string from an array of strings
// Retorna a string mais longa de um array de strings

// Write a function that takes an array of strings as argument
// Escreve uma função que recebe um array de strings como argumento
// Return the longest string
// Retorna a string mais longa

function myFunction(arr) {
  let strMajor = '';
  arr.forEach((str) =>
    str.length > strMajor.length ? (strMajor = str) : strMajor
  );
  return strMajor;
}

function myFunctionP(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

console.log(myFunction(['help', 'me'])); // 'help'
console.log(myFunction(['I', 'need', 'candy'])); // 'candy'
