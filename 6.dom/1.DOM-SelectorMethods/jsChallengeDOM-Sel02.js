// Query descendent HTML elements
// Consultar elementos HTML descendentes

// Here, the existing code expects the variables 'buttonElem' and 'inputElem' to represent the button and input elements in the example UI.
// Aqui, o código existente espera que as variáveis 'buttonElem' e 'inputElem' representem o botão e os elementos de entrada na interface do usuário de exemplo.
// Assign the respective elements to the variables.
// Atribua os respectivos elementos às variáveis.
// In this case, the two elements do not have unique identifiers - like for example an id. Instead they are direct descendents of a div element with id 'wrapper'. Use an appropriate selector method!
// Nesse caso, os dois elementos não possuem identificadores exclusivos - como, por exemplo, um id. Em vez disso, eles são descendentes diretos de um elemento div com id 'wrapper'. Use um método de seleção apropriado!

// HTML
{
  /*  
  <div id="wrapper">
    <input type="text" value="OFF" readonly/>
    <button type="button">Click Me</button>
  </div> 
*/
}

// my resolution
const buttonElem = document.getElementById('wrapper').children[1];
const inputElem = document.getElementById('wrapper').children[0];

// teacher
const buttonElemP = document.querySelector('#wrapper button');
const inputElemP = document.querySelector('#wrapper input');

buttonElem.addEventListener('click', () => {
  const oldText = inputElem.value;
  return (inputElem.value = oldText === 'ON' ? 'OFF' : 'ON');
});
