//Sorteio de Números:
function sortear() {
    let inputQuantidade = parseInt(document.getElementById('quantidade').value);
    let inputDe = parseInt(document.getElementById('de').value);
    let inputAte = parseInt(document.getElementById('ate').value);

    let nomerosSorteados = [];
    let numero;

    let labelResultado = document.getElementById('resultado');

    if (inputQuantidade <= ((inputAte - inputDe) + 1) || inputDe < inputAte) {
        for (let i = 0; i < inputQuantidade; i++) {
            numero = obterNumeroAleatorio(inputDe, inputAte);

            while (nomerosSorteados.includes(numero)) {
                numero = obterNumeroAleatorio(inputDe, inputAte);
            }

            nomerosSorteados.push(numero);
        }
        labelResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${nomerosSorteados}</label>`;
    } else {
        labelResultado.innerHTML = `<label class="texto__paragrafo">Seleção de parâmetros impossível. Favor corrigir.</label>`;
    }

    alterarStatusBotao('btn-reiniciar');
}

//Gerador de Número Aleatório:
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Alterar status do botão:
function alterarStatusBotao(id) {
    let botao = document.getElementById(id);

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

//Reiniciar Campos:
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    alterarStatusBotao('btn-reiniciar');
}