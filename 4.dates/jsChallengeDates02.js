// Return the number of days between two dates
// Retorna o número de dias entre duas datas

// Write a function that takes two date instances as argument
// Escreva uma função que receba duas instâncias de data como argumento
// It should return the number of days that lies between those dates
// Deve retornar o número de dias que está entre essas datas

function myFunction(a, b) {
  const difference = Math.abs(b.getTime() - a.getTime());
  return difference / 86400000;
}

function myFunction(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24;
}

console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')));
// 10

console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')));
// 7457
