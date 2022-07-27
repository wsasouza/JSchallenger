// Check whether a string contains another string and concatenate
// Verifica se uma string contém outra string e concatena

// Write a function that takes two strings (a and b) as arguments
// Escreva uma função que receba duas strings (a e b) como argumentos
// If a contains b, append b to the beginning of a
// Se a contém b, anexa b ao início de a
// If not, append it to the end
// Se não, anexa-o ao final
// Return the concatenation
// Retorna a concatenação

function myFunction(a, b) {
  return a.match(b) ? b.concat(a) : a.concat(b);
}

function myFunctionP(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a;
}

console.log(myFunction('cheese', 'cake')); // 'cheesecake'
console.log(myFunction('lips', 's')); // 'slips'
console.log(myFunction('Java', 'script')); // 'Javascript'
console.log(myFunction(' think, therefore I am', 'I')); // 'I think, therefore I am'
