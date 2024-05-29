//Vetores de compras:
let qtdeCarrinho = [];
let prodCarrinho = [];
let custCarrinho = [];

//Vetor de produtos:
let precoProdutos = [100, 1400, 5000];
let nomeProdutos = ['Fone de ouvido', 'Celular', 'Oculus VR'];


//Zerar produtos:
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = `<span class="texto-azul" id="valor-total">R$0</span>`;
document.getElementById('quantidade').value = 1;

//Função adicionar para o carrinho:
function adicionar() {

    //Coleta de dados:
    let prodSelect = document.getElementById('produto').selectedIndex;
    let qtdeSelect = parseInt(document.getElementById('quantidade').value);

    //Tratamento quantidade zerada:
    if (!Number.isInteger(qtdeSelect) || qtdeSelect < 1) {
        alert('Insira uma quantidade válida!');
        return;
    }

    if (prodCarrinho.includes(prodSelect)) {
        indexProduto = prodCarrinho.indexOf(prodSelect);
        qtdeCarrinho[indexProduto] = qtdeSelect;
        prodCarrinho[indexProduto] = prodSelect;
        custCarrinho[indexProduto] = qtdeSelect * precoProdutos[prodSelect];
    } else {
        qtdeCarrinho.push(qtdeSelect);
        prodCarrinho.push(prodSelect);
        custCarrinho.push(qtdeSelect * precoProdutos[prodSelect]);
    }

    //Atualizar carrinho:
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = '';
    let novoProduto = '';

    for (i = 0; i < prodCarrinho.length; i++) {
        novoProduto = novoProduto +
            `<section class="carrinho__produtos__produto">
                <span class="texto-azul">${qtdeCarrinho[i]}x</span> ${nomeProdutos[prodCarrinho[i]]} <span class="texto-azul">R$${custCarrinho[i]}</span>
            </section>`;
    }
    listaCarrinho.innerHTML = novoProduto;

    //Atualizar total:
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${custCarrinho.reduce((a, b) => a + b, 0)}</span>`;

    //Zerar Value:
    document.getElementById('quantidade').value = 1;
}

//Função limpar carrinho:
function limpar() {
    qtdeCarrinho = [];
    prodCarrinho = [];
    custCarrinho = [];

    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = '';

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$0</span>`;
}