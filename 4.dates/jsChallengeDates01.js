// Check if two dates are equal
// Verifica se duas datas são iguais

// Sounds easy, but you need to know the trick
// Parece fácil, mas você precisa saber o truque
// Write a function that takes two date instances as arguments
// Escreva uma função que receba duas instâncias de data como argumentos
// It should return true if the dates are equal
// Deve retornar true se as datas forem iguais
// It should return false otherwise
// Deve retornar false caso contrário

function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
);
// false

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
);
// true

console.log(
  myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
);
// false
