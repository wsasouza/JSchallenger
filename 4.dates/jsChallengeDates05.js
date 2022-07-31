// Check if one date is earlier than another
// Verifica se uma data é anterior a outra

// Write a function that takes two date instances (a and b) as arguments
// Escreva uma função que receba duas instâncias de data (a e b) como argumentos
// It should return true if a is earlier than b
// Deve retornar true se a for anterior a b
// It should return false otherwise
// Deve retornar false caso contrário

function myFunction(a, b) {
  return a.getTime() < b.getTime();
}

function myFunctionP(a, b) {
  return a < b;
}

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
);
// true

console.log(
  myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))
);
// false

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
);
// false
