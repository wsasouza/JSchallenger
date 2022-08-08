// Select the button element on the page
// Seleciona o elemento do botão na página

// In this scenario, the existing code adds an eventListener for a click event on a variable 'buttonElem'. It expects 'buttonElem' to be the button element in the example UI. But, that element is not selected yet.
// Nesse cenário, o código existente adiciona um eventListener para um evento de clique em uma variável 'buttonElem'. Ele espera que 'buttonElem' seja o elemento de botão na interface do usuário de exemplo. Mas, esse elemento ainda não está selecionado.
// Assign the button element to the variable 'buttonElem' with one of the existing selector methods.
// Atribui o elemento de botão à variável 'buttonElem' com um dos métodos seletores existentes.
// Click the button to verify that the code is working.
// Clique no botão para verificar se o código está funcionando.
// Hint: Make use of the unique id identifier of the button element
// Dica: Use o identificador de id exclusivo do elemento de botão.

// HTML
// <button type="button" id="button">OFF</button>

// resolution
const buttonElem = document.getElementById('button');

buttonElem.addEventListener('click', () => {
  const oldText = buttonElem.innerText;
  return (button.innerText = oldText === 'ON' ? 'OFF' : 'ON');
});
