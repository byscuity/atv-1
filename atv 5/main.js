// cria referência ao form e aos elementos h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const outMedicamento = document.querySelector("#outMedicamento");
const outPromocao = document.querySelector("#outPromocao");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // obtém conteúdo dos campos
    const medicamento = frm.imMedicamento.value;
    const preco = Number(frm.inPreco.value);
    
    // calcula o valor total sem desconto
    const total = preco * 2;
    
    // extrai os centavos do valor total (parte decimal)
    const centavos = Math.floor(total * 100) % 100;
    
    // aplica o desconto (subtrai os centavos)
    const valorComDesconto = total - (centavos / 100);
    
    // exibe a resposta
    outMedicamento.innerText = `Promoção de ${medicamento}`;
    outPromocao.innerText = `Leve 2 por apenas: R$ ${valorComDesconto.toFixed(2)}`;
    
    e.preventDefault();  // evita envio do form
});