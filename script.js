// Dados dos produtos
const produtos = [
    { nome: "Teclado Mecânico Husky Nomadic", preco: 349.90 },
    { nome: "Cadeira Gamer XT Racer Defender NR17", preco: 899.99 },
    { nome: "Mouse Attack Shark R1", preco: 380.99 },
    { nome: "Headset Gamer Redragon Zeus X H510", preco: 223.99 },
    { nome: "Mousepad Redragon Kunlun L P006A", preco: 139.99 },
    { nome: "Microfone HyperX SoloCast USB", preco: 399.90 }
];

const cards = document.querySelectorAll(".card");

function formatar(valor) {
    return valor.toFixed(2);
}

// CARRINHO
const modal = document.querySelector("#modal");
const botaoCarrinho = document.querySelector("#btn-carrinho");
const botaoFechar = document.querySelector("#btn-fechar");
const listaCarrinho = document.querySelector("#lista-carrinho");
const textoTotal = document.querySelector("#total");

let quantidade = 0;
let total = 0;

cards.forEach(function (card) {
    const botao = card.querySelector(".btn-add");

    botao.addEventListener("click", function () {
        const nome = card.querySelector("h3").textContent;

        const encontrados = produtos.filter(function (p) {
            return p.nome === nome;
        });
        const produto = encontrados[0];

        const item = document.createElement("li");
        item.textContent = produto.nome + " - R$ " + formatar(produto.preco);
        listaCarrinho.append(item);

        quantidade++;
        total = total + produto.preco;
        botaoCarrinho.textContent = "Carrinho (" + quantidade + ")";
        textoTotal.textContent = "Total: R$ " + formatar(total);

        modal.classList.add("aberto");
    });
});

botaoCarrinho.addEventListener("click", function () {
    modal.classList.add("aberto");
});

botaoFechar.addEventListener("click", function () {
    modal.classList.remove("aberto");
});

// BUSCA / FILTRAGEM
const campoBusca = document.querySelector("#busca");
const botaoBuscar = document.querySelector("#btn-buscar");
const semResultado = document.querySelector("#sem-resultado");

botaoBuscar.addEventListener("click", function () {
    const termo = campoBusca.value.toLowerCase();
    let achou = false;

    cards.forEach(function (card) {
        const nome = card.querySelector("h3").textContent.toLowerCase();

        if (nome.includes(termo)) {
            card.classList.remove("escondido");
            achou = true;
        }
        else {
            card.classList.add("escondido");
        }
    });

    if (achou) {
        semResultado.classList.add("escondido");
    }
    else {
        semResultado.classList.remove("escondido");
    }
});

// FORMULÁRIO
const formulario = document.querySelector("#form-produto");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoImagem = document.querySelector("#imagem");
const campoDetalhes = document.querySelector("#detalhes");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (campoNome.value === "") {
        alert("Digite o nome do produto!");
    }
    else if (campoPreco.value === "") {
        alert("Digite o preço!");
    }
    else if (campoImagem.value === "") {
        alert("Digite o link da imagem!");
    }
    else if (campoDetalhes.value === "") {
        alert("Digite o link para detalhes!");
    }
    else {
        alert("Produto cadastrado com sucesso!");
        campoNome.value = "";
        campoPreco.value = "";
        campoImagem.value = "";
        campoDetalhes.value = "";
    }
});