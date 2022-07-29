// Replace empty strings in object with null values
// Substitui strings vazias no objeto por valores nulos

// Write a function that takes an object as argument
// Escreve uma função que recebe um objeto como argumento
// Some of the property values contain empty strings
// Alguns dos valores de propriedade contêm strings vazias
// Replace empty strings and strings that contain only whitespace with null values
// Substitui strings vazias e strings que contêm apenas espaços em branco por valores nulos
// Return the resulting object
// Retorna o objeto resultante

function myFunction(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj).map((el) =>
    el === '' || el === ' ' ? null : el
  );

  return keys.reduce((acc, cur, i) => ({ ...acc, [cur]: values[i] }), {});
}

function myFunctionP(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}

console.log(myFunction({ a: 'a', b: 'b', c: '' }));
// { a: 'a', b: 'b', c: null }

console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }));
// { a: null, b: 'b', c: null, d: 'd' }

console.log(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }));
// { a: 'a', b: 'b ', c: null, d: null }
