// Creating Javascript Sets
// Criando conjuntos de Javascript

// Write a function that takes three elements of any type as arguments
// Escreva uma função que receba três elementos de qualquer tipo como argumentos
// Create a Set from those elements
// Cria um Set a partir desses elementos
// Return the result
// Retorna o resultado

function myFunction(a, b, c) {
  return new Set([a, b, c]);
}

function myFunctionP(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

console.log(myFunction(1, 'b', 3)); // Set { 1, 'b', 3}
console.log(myFunction(NaN, null, false)); // Set { NaN, null, false }
console.log(myFunction('a', ['b'], { c: 3 })); // Set { 'a', ['b'], { c:3 } }
