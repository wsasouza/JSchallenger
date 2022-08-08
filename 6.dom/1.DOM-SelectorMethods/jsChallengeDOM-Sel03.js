// Select multiple HTML elements
// Seleciona vários elementos HTML

// In this scenario, we are looking for a list of elements gathered in one variable - rather than only one element.
// Neste cenário, estamos procurando uma lista de elementos reunidos em uma variável - em vez de apenas um elemento.
// Assign the list items in the view to the variable 'listItems' by using an appropriate selector method.
// Atribui os itens da lista na exibição à variável 'listItems' usando um método seletor apropriado.
// Once you have completed the code below, verify it by hovering over the list items until all items have the value 'ON'
// Depois de concluir o código abaixo, verifique-o passando o mouse sobre os itens da lista até que todos os itens tenham o valor 'ON'

// HTML

{
  /* 
  <ul id="list">
    <li>OFF</li>
    <li>OFF</li>
    <li>OFF</li>
    <li>OFF</li>
    <li>OFF</li>
    <li>OFF</li>
  </ul> 
*/
}

// My resolution
const listItems = document.querySelectorAll('li');

// Teacher
// const listItemsP = document.querySelectorAll("#list li");

const handleHover = (event) => {
  return (event.target.innerText = 'ON');
};
if (listItems.length > 1) {
  listItems.forEach((item) => item.addEventListener('mouseover', handleHover));
}
