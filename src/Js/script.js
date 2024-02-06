const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
  nome: 'Verde-cipreste',
  nomePastaImagens: 'imagens-verde-cipreste',
};
const azulInverno = {
  nome: 'Azul-inverno',
  nomePastaImagens: 'imagens-azul-inverno',
};
const meiaNoite = {
  nome: 'Meia-noite',
  nomePastaImagens: 'imagens-meia-noite',
  emEstoque: false,
};
const estelar = {
  nome: 'Estelar',
  nomePastaImagens: 'imagens-estelar',
};
const rosaClaro = {
  nome: 'Rosa-claro',
  nomePastaImagens: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarCorSelecionada() {
  const corSelecionadaInput = document.querySelector('[name="opcao-cor"]:checked');

  if (corSelecionadaInput) {
    const numeroCorSelecionada = corSelecionadaInput.id.charAt(0);
    corSelecionada = numeroCorSelecionada;

    nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

    imagemVisualizacao.src = `../img/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/img-${imagemSelecionada}.jpeg`;

    opcaoImagem0.src = `../img/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
    opcaoImagem1.src = `../img/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
    opcaoImagem2.src = `../img/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
  }
}

function atualizarTamanho() {
  const tamanhoSelecionadoInput = document.querySelector('[name="opcao-tamanho"]:checked');

  if (tamanhoSelecionadoInput) {
    tamanhoSelecionado = tamanhoSelecionadoInput.id.charAt(0);

    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
      imagemVisualizacao.classList.add('caixa-pequena');
    } else {
      imagemVisualizacao.classList.remove('caixa-pequena');
    }

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
  }
}

function atualizarImagemSelecionada() {
  const imagemSelecionadaInput = document.querySelector('[name="opcao-imagem"]:checked');

  if (imagemSelecionadaInput) {
    imagemSelecionada = imagemSelecionadaInput.id.charAt(0);
    imagemVisualizacao.src = `../img/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
  }
}
