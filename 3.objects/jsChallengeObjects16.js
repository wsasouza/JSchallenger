// Extracting information from objects
// Extraindo informações de objetos

// Write a function that takes an object as argument containing properties with personal information
// Escreva uma função que receba um objeto como argumento contendo propriedades com informações pessoais
// Extract firstName, lastName, size, and weight if available
// Extraia firstName, lastName, size e weight se disponível
// If size or weight is given transform the value to a string
// Se for dado tamanho ou peso transforma o valor em uma string
// Attach the unit cm to the size
// Anexar a unidade cm ao tamanho
// Attach the unit kg to the weight
// Anexar a unidade kg ao peso
// Return a new object with all available properties that we are interested in
// Retorna um novo objeto com todas as propriedades disponíveis que nos interessam

function myFunction(obj) {
  const { fn, ln, size, weight } = obj;
  const newObj = {
    fn,
    ln,
    ...(size && { size: size + 'cm' }),
    ...(weight && { weight: weight + 'kg' }),
  };
  return newObj;
}

function myFunctionP(obj) {
  return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
  };
}

console.log(
  myFunction({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 })
);
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

console.log(
  myFunction({
    fn: 'Martin',
    ln: 'Harper',
    age: 26,
    email: 'martin.harper@test.de',
    weight: 102,
  })
);
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

console.log(
  myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 })
);
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

console.log(
  myFunction({
    fn: 'Matthew',
    ln: 'Müller',
    age: 19,
    email: 'matthew@mueller.de',
  })
);

// {fn: 'Matthew', ln: 'Müller'}
