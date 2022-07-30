// Add property to each object in array
// Adiciona propriedade a cada objeto no array

// Write a function that takes an array of objects and a string as arguments
// Escreva uma função que recebe um array de objetos e uma string como argumentos
// Add a property with key 'continent' and value equal to the string to each of the objects
// Adiciona uma propriedade com chave 'continente' e valor igual a string para cada um dos objetos
// Return the new array of objects
// Retorna o novo array de objetos
// Tipp: try not to mutate the original array
// Tipp: tente não alterar o array original

function myFunction(arr, str) {
  return;
}

console.log(
  myFunction(
    [
      { city: 'Tokyo', country: 'Japan' },
      { city: 'Bangkok', country: 'Thailand' },
    ],
    'Asia'
  )
);
// [
//  { city: 'Tokyo', country: 'Japan', continent: 'Asia' },
//  { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }
// ]

console.log(
  myFunction(
    [
      { city: 'Stockholm', country: 'Sweden' },
      { city: 'Paris', country: 'France' },
    ],
    'Europe'
  )
);

// [
//   { city: 'Stockholm', country: 'Sweden', continent: 'Europe' },
//   { city: 'Paris', country: 'France', continent: 'Europe' },
// ];
