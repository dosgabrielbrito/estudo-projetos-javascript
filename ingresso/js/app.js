//Função de compra de ingressos:
function comprar() {
    //Obter dados do ingresso e quantidade:
    let tipoIngresso = document.getElementById('tipo-ingresso').selectedIndex;
    let qtdeIngresso = parseInt(document.getElementById('qtd').value);

    //Obter dados do estoque ingressos:
    let qtdePista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdeSuper = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdeInfer = parseInt(document.getElementById('qtd-inferior').textContent);

    //Quantidade inválida:
    if (!Number.isInteger(qtdeIngresso) || qtdeIngresso < 1) {
        alert('Insira uma quantidade válida!');
        return;
    }

    //Quantidade máxima:
    qtdeMaxima = 50;
    if (qtdeIngresso > qtdeMaxima) {
        alert(`Quantidade máxima de ${qtdeMaxima} ingressos por pessoa. Favor inserir nova quantidade.`);
        document.getElementById('qtd').value = '';
        return;
    }

    //Array de ingressos disponíveis:
    let totalIngressos = [qtdePista, qtdeSuper, qtdeInfer];

    //Contador de ingressos:
    dispoIngressos = totalIngressos[tipoIngresso] - qtdeIngresso;

    if (totalIngressos[tipoIngresso] > 0 && dispoIngressos >= 0) {
        //Caso de sobra de ingressos:
        okCompra = confirm('Todos os ingressos estão disponíveis, deseja comprar?');
        if (okCompra) {
            totalIngressos[tipoIngresso] = dispoIngressos;
            alert(`${qtdeIngresso} ingressos comprados com sucesso!`);
        } else {
            return;
        }
    } else if (totalIngressos[tipoIngresso] > 0 && dispoIngressos < 0) {
        //Caso de indisponibilidade parcial de ingressos:
        dispoMaxima = totalIngressos[tipoIngresso];
        okCompra = confirm(`Somente ${dispoMaxima} ingressos estão disponíveis, deseja comprar?`);
        if (okCompra) {
            totalIngressos[tipoIngresso] = 0;
            alert(`${dispoMaxima} ingressos comprados com sucesso!`);
        } else {
            return;
        }
    } else {
        alert('Não há ingressos disponíveis.');
    }

    //Atualizar dados do estoque ingressos:
    document.getElementById('qtd-pista').textContent = totalIngressos[0];
    document.getElementById('qtd-superior').textContent = totalIngressos[1];
    document.getElementById('qtd-inferior').textContent = totalIngressos[2];
    document.getElementById('qtd').value = '';
}