
// Seleciona o formulário e o elemento h3
const form = document.querySelector('form');
const h3 = document.querySelector('h3');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    
    // Obtém o valor do input com id inNome
    const nome = document.getElementById('inNome').value;
    
    // Exibe a mensagem com o nome digitado no h3
    h3.textContent = `Olá, ${nome}!`;
});