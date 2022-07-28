// Find the correct word by incrementing letters in alphabet
// Encontra a palavra correta incrementando as letras do alfabeto

// Write a function that takes a string as argument
// Escreve uma função que recebe uma string como argumento
// As it is, the string has no meaning
// Como está, a string não tem significado
// Increment each letter to the next letter in the alphabet
// Incrementa cada letra para a próxima letra do alfabeto
// Return the correct word
// Retorna a palavra correta

function myFunction(str) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  const arrayAlfa = alfabeto.split('');
  const arrayStr = str.split('');
  const positions = [];
  const values = [];

  for (let i = 0; i < arrayStr.length; i++) {
    positions.push(arrayAlfa.findIndex((index) => index === arrayStr[i]) + 1);
  }

  for (let i = 0; i < positions.length; i++) {
    values.push(arrayAlfa.at(positions[i]));
  }

  return values.join('');
}

function myFunctionP(str) {
  const arr = [...str];
  const correctedArray = arr.map((e) =>
    String.fromCharCode(e.charCodeAt() + 1)
  );
  return correctedArray.join('');
}

console.log(myFunction('bnchmf')); // 'coding'
console.log(myFunction('bgddrd')); // 'cheese'
console.log(myFunction('sdrshmf')); // 'testing'
