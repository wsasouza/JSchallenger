// Merge two objects with matching keys
// Mesclar dois objetos com chaves correspondentes

// Write a function that takes two objects as arguments
// Escreva uma função que receba dois objetos como argumentos
// Unfortunately, the property 'b' in the second object has the wrong key
// Infelizmente, a propriedade 'b' no segundo objeto tem a chave errada
// It should be named 'd' instead
// Deve ser nomeado 'd' em vez disso
// Merge both objects and correct the wrong property name
// Mescla ambos os objetos e corrige o nome errado da propriedade
// Return the resulting object
// Retorna o objeto resultante
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
// Deve ter as propriedades 'a', 'b', 'c', 'd' e 'e'

function myFunction(x, y) {
  const z = { c: y['c'], d: y['b'], ...y };
  delete z['b'];

  return Object.assign(x, z);
}

function myFunctionP(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// { a: 1, b: 2, c: 3, e: 5, d: 4}

console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));
// { a: 5, b: 4, c: 3, e: 2, d: 1}
