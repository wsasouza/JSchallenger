// Split a number into its digits
// Divida um número em seus dígitos

// Write a function that takes a number (a) as argument
// Escreva uma função que recebe um número (a) como argumento
// Split a into its individual digits and return them in an array
// Divide a em seus dígitos individuais e os retorna em um array
// Tipp: you might want to change the type of the number for the splitting
// Tipp: você pode querer alterar o tipo do número para a divisão

function myFunction(a) {
  return a
    .toString()
    .split('')
    .map((el) => parseInt(el));
}

function myFunctionP(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map((digit) => Number(digit));
}

console.log(myFunction(10)); // [1,0]
console.log(myFunction(931)); // [9,3,1]
console.log(myFunction(193278)); // [1,9,3,2,7,8]
