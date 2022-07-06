// Accessing object properties one
// Acessando as propriedades do objeto

// Write a function that takes an object with two properties as argument
// Escreve uma função que recebe um objeto com duas propriedades como argumento
// It should return the value of the property with key country
// Deve retornar o valor da propriedade com o país chave

function myFunction(obj) {
  return obj.country;
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
// Japan

console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));
// Sweden
