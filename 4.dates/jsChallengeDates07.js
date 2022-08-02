// Calculate difference between two dates in hours, minutes, and seconds
// Calcula a diferença entre duas datas em horas, minutos e segundos

// This is a more difficult challenge
// Este é um desafio mais difícil
// Write a function that takes two date instances as arguments
// Escreva uma função que receba duas instâncias de data como argumentos
// It should return an object with the properties 'hrs', 'min', and 'sec'
// Deve retornar um objeto com as propriedades 'hrs', 'min' e 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
// Os valores correspondentes devem exibir a diferença absoluta entre as duas datas em horas, minutos e segundos

function myFunction(a, b) {
  const difference = Math.abs(b.getTime() - a.getTime());
  let hours = parseInt(difference / 1000 / 60 / 60);
  let minutes = parseInt(difference / 1000 / 60) % 60;
  let seconds = parseInt(difference / 1000) % 60;
  return {
    hrs: hours,
    min: minutes,
    sec: seconds,
  };
}

function myFunction(a, b) {
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec };
}

console.log(
  myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))
);
// { hrs: 0, min: 45, sec: 10 }

console.log(
  myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))
);
// { hrs: 1, min: 50, sec: 23 }

console.log(
  myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))
);
// { hrs: 3, min: 4, sec: 12 }
