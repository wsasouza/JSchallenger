// Group array of strings by first letter
// Agrupar array de strings pela primeira letra

// Write a function that takes an array of strings as argument
// Escreve uma função que recebe um array de strings como argumento
// Group those strings by their first letter
// Agrupa essas strings pela primeira letra
// Return an object that contains properties with keys representing first letters
// Retorna um objeto que contém propriedades com chaves representando as primeiras letras
// The values should be arrays of strings containing
// Os valores devem ser arrays de strings contendo
// only the corresponding strings
// apenas as strings correspondentes
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// Por exemplo, o array ['Alf', 'Alice', 'Ben'] deve ser transformado em
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  return;
}

console.log(myFunction(['Alf', 'Alice', 'Ben']));
// { a: ['Alf', 'Alice'], b: ['Ben']}

console.log(myFunction(['Ant', 'Bear', 'Bird']));
// { a: ['Ant'], b: ['Bear', 'Bird']}

console.log(myFunction(['Berlin', 'Paris', 'Prague']));
// { b: ['Berlin'], p: ['Paris', 'Prague']}
