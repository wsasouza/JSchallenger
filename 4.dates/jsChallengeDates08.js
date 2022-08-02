// Return the next nearest quarter hour of a date
// Retorna o quarto de hora mais próximo de uma data

// Write a function that takes a Date instance as argument
// Escreva uma função que recebe uma instância de Date como argumento
// It should return the next nearest quarter hour in minutes
// Deve retornar o próximo quarto de hora mais próximo em minutos
// For example, if the given date has the time 10:01 the function should return 15
// Por exemplo, se a data especificada tiver a hora 10:01, a função deve retornar 15

function myFunction(date) {
  let result = 0;
  if (date.getMinutes() <= 15) result = 15;
  else if (date.getMinutes() > 15 && date.getMinutes() <= 30) result = 30;
  else if (date.getMinutes() > 30 && date.getMinutes() <= 45) result = 45;
  else result = 0;

  return result;
}

function myFunctionP(date) {
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter =
    closestQuarter.getTime() < date.getTime()
      ? new Date(closestQuarter.getTime() + quarter)
      : closestQuarter;
  return nextQuarter.getMinutes();
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00))); // 15
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00))); // 45
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00))); // 30
