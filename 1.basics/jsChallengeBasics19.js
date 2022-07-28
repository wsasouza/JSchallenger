// Clear up the chaos behind these strings
// Limpa o caos por trás dessas strings

// It seems like something happened to these strings
// Parece que algo aconteceu com essas strings
// Can you figure out how to clear up the chaos?
// Você consegue descobrir como limpar o caos?
// Write a function that joins these strings together such that they form the following words:
// Escreva uma função que una essas strings de forma que elas formem as seguintes palavras:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
// Você pode querer aplicar métodos básicos de string JS como replace(), split(), slice() etc

function myFunction(a, b) {
  let firstLetter = a.charAt(0).toUpperCase();
  let formatA = a.replace('%', '').slice(1);
  let formatB = b.split('').reverse().join('').replace('%', '');

  return firstLetter + formatA + formatB;
}

function myFunctionP(a, b) {
  const func = (x) => x.replace('%', '');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

console.log(myFunction('java', 'tpi%rcs')); // 'Javascript'
console.log(myFunction('c%ountry', 'edis')); // 'Countryside'
console.log(myFunction('down', 'nw%ot')); // 'Downtown'
