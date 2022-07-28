// Return the next higher prime number
// Retorna o próximo número primo mais alto

// This challenge is a little bit more complex
// Este desafio é um pouco mais complexo
// Write a function that takes a number (a) as argument
// Escreva uma função que recebe um número (a) como argumento
// If a is prime, return a
// Se a é primo, retorna a
// If not, return the next higher prime number
// Se não, retorna o próximo número primo mais alto

function myFunction(a) {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  };
  while (!isPrime(a)) {
    a++;
  }
  return a;
}

function myFunctionP(a) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  let n = a;
  while (!isPrime(n)) n++;
  return n;
}

console.log(myFunction(38)); // 41
console.log(myFunction(7)); // 7
console.log(myFunction(115)); // 127
console.log(myFunction(2000)); // 2003
