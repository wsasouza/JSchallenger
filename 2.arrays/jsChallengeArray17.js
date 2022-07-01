// Sum up all array elements with values greater than
// Soma todos os elementos do array com valores maiores que

// Write a function that takes an array (a) and a number (b) as arguments
// Escreva uma função que recebe um array (a) e um número (b) como argumentos
// Sum up all array elements with a value greater than b
// Soma todos os elementos do array com valor maior que b
// Return the sum
// Retorna a soma

function myFunction(a, b) {
  let result = a.reduce((sum, number) => (number > b ? sum + number : sum), 0);
  return result;
}

function myFunctionP(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2)); // 25
console.log(myFunction([-10, -11, -3, 1, -4], -3)); // 1
console.log(myFunction([78, 99, 100, 101, 401], 99)); // 602
