// Convert array to object with counter
// Converte array em objeto com contador

// Write a function that takes an array of numbers as argument
// Escreva uma função que receba um array de números como argumento
// Convert the array to an object
// Converte o array em um objeto
// It should have a key for each unique value of the array
// Deve ter uma chave para cada valor único do array
// The corresponding object value should be the number of times the key occurs within the array
// O valor do objeto correspondente deve ser o número de vezes que a chave ocorre dentro do array

function myFunction(a) {
  const newObj = a.reduce((acc, cur) => {
    const key = cur;
    return { ...acc, [key]: [...(acc[key] || []), cur] };
  }, []);

  return Object.entries(newObj).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val.length };
  }, {});
}

function myFunctionP(a) {
  return a.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}

console.log(myFunction([1, 2, 2, 3])); // {1:1,2:2,3:1}
console.log(myFunction([9, 9, 9, 99])); // {9:3,99:1}
console.log(myFunction([4, 3, 2, 1])); // {1:1,2:1,3:1,4:1}
