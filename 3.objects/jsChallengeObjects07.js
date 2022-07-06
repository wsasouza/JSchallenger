// Creating Javascript objects three
// Criando objetos Javascript três

// Write a function that takes two arrays (a and b) as arguments
// Escreva uma função que recebe dois arrays (a e b) como argumentos
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Cria um objeto que possui propriedades com chaves 'a' e valores correspondentes 'b'
// Return the object
// Retorna o objeto

function myFunction(a, b) {
  let arr = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j) {
        arr.push([a[i], b[j]]);
      }
    }
  }

  return Object.fromEntries(arr);
}

function myFunctionP(a, b) {
  return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunction(['a', 'b', 'c'], [1, 2, 3]));
// {a:1,b:2,c:3}

console.log(myFunction(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
// {w:10,x:9,y:5,z:2}

console.log(myFunction([1, 'b'], ['a', 2]));
// {1:'a',b:2}
