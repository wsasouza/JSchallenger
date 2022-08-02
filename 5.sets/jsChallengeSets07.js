// Get Intersection of two Javascript Sets
// Obtém a interseção de dois conjuntos de Javascript

// Write a function that takes two sets (a and b) as arguments
// Escreva uma função que receba dois conjuntos (a e b) como argumentos
// Get the intersection of the sets
// Obtém a interseção dos conjuntos
// In other words, return a set containing all elements that are both in a as well as b
// Em outras palavras, retorna um conjunto contendo todos os elementos que estão em a e em b

function myFunction(a, b) {
  const result = new Set();
  a.forEach((el) => {
    if (b.has(el)) result.add(el);
  });
  return result;
}

function myFunctionP(a, b) {
  const int = new Set();
  a.forEach((el) => b.has(el) && int.add(el));
  return int;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
// Set()

console.log(myFunction(new Set('12345'), new Set([...'45678'])));
// Set('45')

console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));
// Set(2, 3)
