// Accessing object properties three
// Acessando as propriedades do objeto três

// Write a function that takes an object with two properties and a string as arguments
// Escreva uma função que recebe um objeto com duas propriedades e uma string como argumentos
// It should return the value of the property with key equal to the value of the string
// Deve retornar o valor da propriedade com chave igual ao valor das strings dois

function myFunction(obj, key) {
  return obj[key];
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'));
// 'Asia'

console.log(myFunction({ country: 'Sweden', continent: 'Europe' }, 'country'));
// 'Sweden'
