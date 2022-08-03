// Add n days to an existing date
// Adiciona n dias a uma data existente

// Write a function that takes as argument a date instance (a) and a number (b)
// Escreva uma função que receba como argumento uma instância de data (a) e um número (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
// Deve adicionar b dias a a e retornar o número de milissegundos desde 1º de janeiro de 1970, 00:00:00 UTC

function myFunction(a, b) {
  const hasSummerIn = a.getTimezoneOffset();
  a.setDate(a.getDate() + b);
  const hasSumerOut = a.getTimezoneOffset();
  if (hasSummerIn !== hasSumerOut) a.setHours(a.getHours() - 1);
  return a.getTime();
}

// resolução não considera horario de verão e não passa nos testes!
function myFunctionP(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b);
}

console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31));
// 952041600000

console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 10));
// 950227200000

console.log(myFunction(new Date(Date.UTC(2000, 02, 28)), 2));
// 954374400000
