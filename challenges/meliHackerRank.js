// Faça a seguinte função para que a mesma devolva todos os possíveis números de 4 dígitos, onde cada um seja menor ou igual a <maxDigit> e a soma dos dígitos de cada número gerado seja 21

// MaxDigit= 6
// 3666, 4566

function myFunction(n) {
  let maxNumber = +n;
  let result = [];
  let item = '';

  for (let i = 1000; i <= 7770; i++) {
    let digitToString = i + '';

    let digit0 = +digitToString[0] <= maxNumber ? +digitToString[0] : 0;
    let digit1 = +digitToString[1] <= maxNumber ? +digitToString[1] : 0;
    let digit2 = +digitToString[2] <= maxNumber ? +digitToString[2] : 0;
    let digit3 = +digitToString[3] <= maxNumber ? +digitToString[3] : 0;

    let total = digit0 + digit1 + digit2 + digit3;

    if (total === 21) {
      item = digit0 + '' + (digit1 + '') + (digit2 + '') + (digit3 + '');
      result.push(item);
    }
  }

  return result;
}

console.log(myFunction('9'));
