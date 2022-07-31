// Check if two dates are within 1 hour from each other
// Verifica se duas datas estão dentro de 1 hora uma da outra

// Write a function that takes two date instances as argument
// Escreva uma função que receba duas instâncias de data como argumento
// It should return true if the difference between the dates is less than or equal to 1 hour
// Deve retornar true se a diferença entre as datas for menor ou igual a 1 hora
// It should return false otherwise
// Deve retornar false caso contrário

function myFunction(a, b) {
  const oneHourInMilliseconds = 3600000;
  return b.getTime() - a.getTime() <= oneHourInMilliseconds;
}

function myFunctionP(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60;
}

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
);
// true

console.log(
  myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
);
// true

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
);
// false

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))
);
// true
