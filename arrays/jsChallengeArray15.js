// Sort array by object property
// Ordenar array por propriedade de objeto

// Write a function that takes an array of objects as argument
// Escreve uma função que recebe um array de objetos como argumento
// Sort the array by property b in ascending order
// Ordena o array pela propriedade b em ordem crescente
// Return the sorted array
// Retorna o array ordenado

function myFunction(arr) {
  return arr.sort((a, b) => a.b - b.b);
}

function myFunctionP(arr) {
  const sort = (x, y) => x.b - y.b;
  return arr.sort(sort);
}

console.log(
  myFunction([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
); // [{a:1,b:2},{a:5,b:4}]
console.log(
  myFunction([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
); // [{a:5,b:4},{a:2,b:10}]
console.log(
  myFunction([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
); // [{a:2,b:1},{a:1,b:7}]
