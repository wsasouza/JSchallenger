// Swap object keys and values
// Troca chaves e valores de objetos

// Write a function that takes an object as argument
// Escreve uma função que recebe um objeto como argumento
// Somehow, the properties and keys of the object got mixed up
// De alguma forma, as propriedades e chaves do objeto se misturaram
// Swap the Javascript object's key with its values and return the resulting object
// Troca a chave do objeto Javascript por seus valores e retorna o objeto resultante

function myFunction(obj) {
  let values = Object.keys(obj);
  let keys = Object.values(obj);

  return keys.reduce((acc, cur, i) => ({ ...acc, [cur]: values[i] }), {});
}

function myFunctionP(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    return { ...acc, [val]: key };
  }, {});
}

console.log(myFunction({ z: 'a', y: 'b', x: 'c', w: 'd' }));
// {a:'z',b:'y',c:'x',d:'w'}

console.log(myFunction({ 2: 'a', 4: 'b', 6: 'c', 8: 'd' }));
// {a:'2',b:'4',c:'6',d:'8'}

console.log(myFunction({ a: 1, z: 24 }));
// {1:'a',24:'z'}
