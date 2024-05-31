//Array de amigos:
let listaAmigos = [];
let listaPresentes = [];

//Adicionar nomes:
function adicionar() {

    //Obter nome do input:
    let nomeAmigo = document.getElementById('nome-amigo').value;

    //Verificar nome e adicionar:
    if (!listaAmigos.includes(nomeAmigo)) {
        listaAmigos.push(nomeAmigo);
    } else {
        alert('Insira um amigo ainda não existente!');
    }

    //Imprimir lista atualizada:
    document.getElementById('lista-amigos').textContent = listaAmigos;
}

//Sorteio de nomes:
function sortear() {

    //Checar quantidade:
    if (listaAmigos.length < 3) {
        alert('Amigo secreto com menos de duas pessoas não é recomendado. Adicione pelo menos 3 amigos na lista.');
        return;
    }

    //Regras para sorteio:
    let checkOutraPessoa = false;
    let checkAmigoRepetido = false;
    let indexSorteio = 0;

    //Realizar sorteio:
    for (i = 0; i < listaAmigos.length; i++) {
        //Reiniciar regras:
        checkOutraPessoa = false;
        checkAmigoRepetido = false;

        while (!checkOutraPessoa || !checkAmigoRepetido) {
            //Sortear index:
            indexSorteio = Math.floor(Math.random() * listaAmigos.length);

            //Verificar se é a mesma pessoa:
            i == indexSorteio ? checkOutraPessoa = false : checkOutraPessoa = true;

            //Verificar se o amigo já foi sorteado:
            listaPresentes.includes(listaAmigos[indexSorteio]) ? checkAmigoRepetido = false : checkAmigoRepetido = true;
        }

        //Inserir amigo sorteado:
        listaPresentes.push(listaAmigos[indexSorteio]);
    }

    //Imprimir Sorteio:
    let listaSorteio = document.getElementById('lista-sorteio');
    let listaFinal = '';

    for (i = 0; i < listaAmigos.length; i++) {
        listaFinal += `<p id="lista-sorteio">${listaAmigos[i]} -> ${listaPresentes[i]}</p>`;
    }
    listaSorteio.innerHTML = listaFinal;

}