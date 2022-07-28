// Find next higher natural number that is divisble by y
// Encontra o próximo número natural mais alto que é divisível por y

// Write a function that takes two numbers, say x and y, as arguments
// Escreva uma função que receba dois números, digamos x e y, como argumentos
// Check if x is divisible by y
// Verifica se x é divisível por y
// If yes, return x
// Se sim, retorna x
// If not, return the next higher natural number that is divisible by y
// Se não, retorna o próximo número natural mais alto que é divisível por y

function myFunction(x, y) {
  let result = 0;
  if (x % y === 0) {
    result = x;
  } else {
    while (x % y !== 0) {
      result = ++x;
    }
  }
  return result;
}

function myFunctionP(x, y) {
  while (x % y !== 0) x++;
  return x;
}

console.log(myFunction(1, 23)); // 23
console.log(myFunction(23, 23)); // 23
console.log(myFunction(7, 3)); // 9
console.log(myFunction(-5, 7)); // 0
