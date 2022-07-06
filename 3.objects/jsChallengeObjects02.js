// Accessing object properties two
// Acessando as propriedades do objeto dois

// Write a function that takes an object with two properties as argument
// Escreve uma função que recebe um objeto com duas propriedades como argumento
// It should return the value of the property with key 'prop-2'
// Deve retornar o valor da propriedade com a chave 'prop-2'
// Tipp: you might want to use the square brackets property accessor
// Dica: você pode querer usar o acessador de propriedade de colchetes

function myFunction(obj) {
  return obj['prop-2'];
}

console.log(myFunction({ one: 1, 'prop-2': 2 })); // 2
console.log(myFunction({ 'prop-2': 'two', prop: 'test' })); // 'two'
