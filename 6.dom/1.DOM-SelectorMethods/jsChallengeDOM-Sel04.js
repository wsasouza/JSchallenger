// Query and exclude HTML elements
// Consulta e exclui elementos HTML

// In this scenario, you need to query all list items that belong to the list with id 'list'. But, exclude the ones with id 'disabled'
// Neste cenário, você precisa consultar todos os itens da lista que pertencem à lista com id 'list'. Mas, exclua aqueles com id 'disabled'
// Assign those items to the variable 'listItems' by using an appropriate selector method.
// Atribui esses itens à variável 'listItems' usando um método seletor apropriado.
// Once you have completed the code below, verify it by clicking the button. The respective items should change their text.
// Depois de concluir o código abaixo, verifique-o clicando no botão. Os respectivos itens devem alterar seu texto.

// HTML

{
  /* 
<ul id="list">
  <li>OFF</li>
  <li>OFF</li>
  <li>OFF</li>
  <li id="disabled">OFF</li>
  <li>OFF</li>
  <li>OFF</li>
  <li id="disabled">OFF</li>
  <li>OFF</li>
</ul>
<button type="button" id="button">Click Me</button> 
*/
}

const listItems = document.querySelectorAll('#list li:not(#disabled)');

const button = document.getElementById('button');

const handleClick = () => {
  listItems.forEach((item) => {
    const oldText = item.innerText;
    return (item.innerText = oldText === 'ON' ? 'OFF' : 'ON');
  });
};
if (listItems.length > 1) {
  button.addEventListener('click', handleClick);
}
