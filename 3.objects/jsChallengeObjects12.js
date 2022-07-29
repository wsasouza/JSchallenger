// Multiply all object values by x
// Multiplica todos os valores do objeto por x

// Write a function that takes an object (a) and a number (b) as arguments
// Escreva uma função que recebe um objeto (a) e um número (b) como argumentos
// Multiply all values of 'a' by 'b'
// Multiplica todos os valores de 'a' por 'b'
// Return the resulting object
// Retorna o objeto resultante

function myFunction(a, b) {
  let keys = Object.keys(a);
  let values = Object.values(a).map((el) => el * b);

  return keys.reduce((acc, cur, i) => ({ ...acc, [cur]: values[i] }), {});
}

function myFunctionP(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));
// { a: 3, b: 6, c: 9 };

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10));
// { j: 90, i: 20, x: 30, z: 40 };

console.log(myFunction({ w: 15, x: 22, y: 13 }, 6));
// { w: 90, x: 132, y: 78 };
