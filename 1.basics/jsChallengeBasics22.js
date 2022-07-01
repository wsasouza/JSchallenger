// Insert character after every n characters (backwards)
// Inserir caractere após cada n caracteres (para trás)

// Write a function that takes two strings (a and b) as arguments
// Escreva uma função que receba duas strings (a e b) como argumentos
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Começando no final de 'a', insira 'b' após cada 3º caractere de 'a'
// Return the resulting string
// Retorna a string resultante

function myFunction(a, b) {
  let strInverse = a.split('').reverse().join('');
  let arr = strInverse.match(/.{1,3}/g).join(b);
  let result = arr.split('').reverse().join('');

  return result;
}

function myFunctionP(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}

console.log(myFunction('1234567', '.')); // '1.234.567'
console.log(myFunction('abcde', '$')); // 'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); // 'zwxyzwxyzwxyzwxyzwxyz'
