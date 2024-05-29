//Lista de jogos:
listaJogos = ['game-1', 'game-2', 'game-3'];

//Função de alterar status do Jogo:
function alterarStatus(codJogo) {

    let statusJogo = document.getElementById(listaJogos[codJogo - 1]);
    let imagemjogo = statusJogo.getElementsByTagName('div')[0];
    let botaojogo = statusJogo.getElementsByTagName('a')[0];

    //console.log(imagemjogo);
    //console.log(botaojogo);
    //console.log(imagemjogo.className);
    //console.log(botaojogo.className);

    //Checar e alterar status:
    if (imagemjogo.className == 'dashboard__item__img' && botaojogo.className == 'dashboard__item__button') {
        imagemjogo.classList.add('dashboard__item__img--rented');
        botaojogo.classList.add('dashboard__item__button--return');
        botaojogo.textContent = 'Devolver';
    } else {
        let okDevolucao = confirm('Deseja devolver o jogo?');
        if (okDevolucao) {
            imagemjogo.classList.remove('dashboard__item__img--rented');
            botaojogo.classList.remove('dashboard__item__button--return');
            botaojogo.textContent = 'Alugar';
        }
    }

    //Contador de alugados:
    countAlguel();
}

function countAlguel() {
    let contAlugados = 0;

    for (var i = 0; i <= (listaJogos.length - 1); i++) {
        let statusJogo = document.getElementById(listaJogos[i]);
        let imagemjogo = statusJogo.getElementsByTagName('div')[0];
        let botaojogo = statusJogo.getElementsByTagName('a')[0];

        if (imagemjogo.className != 'dashboard__item__img' && botaojogo.className != 'dashboard__item__button') {
            contAlugados++;
        }
    }

    alert(`Quatidade de jogos alugados: ${contAlugados}`)
}