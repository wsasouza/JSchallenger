// Check if two dates fall on the exact same day
// Verifica se duas datas caem exatamente no mesmo dia

// Write a function that takes two date instances as argument
// Escreva uma função que receba duas instâncias de data como argumento
// It should return true if they fall on the exact same day
// Deve retornar true se eles caírem exatamente no mesmo dia
// It should return false otherwise
// Deve retornar false caso contrário

function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

function myFunctionP(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')));
// true

console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/02')));
// false

console.log(myFunction(new Date('2001/01/01'), new Date('2000/01/01')));
// false

console.log(myFunction(new Date('2000/11/01'), new Date('2000/01/01')));
// false
