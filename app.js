let listaDeNumerosEscolhidos = [];
let limiteDeNumero = 10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativa= 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número do 1 ao 10');
        
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                if (chute > numeroSecreto){
                    exibirTextoNaTela ('p', 'O numéro secreto é menor.');
                } else {
                    exibirTextoNaTela ('p', 'O número secreto é maior.');
        }
    tentativa++
    limparBarra()
    }
    console.log(numeroSecreto)
}

function gerarNumeroAleatorio() {
   let numerosGerados = parseInt(Math.random() * limiteDeNumero + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosEscolhidos.length;

   if (quantidadeDeElementosNaLista == limiteDeNumero) {
    listaDeNumerosEscolhidos = [];
   }
   if (listaDeNumerosEscolhidos.includes(numerosGerados)) {
    return gerarNumeroAleatorio();
   } else  {
    listaDeNumerosEscolhidos.push(numerosGerados);
    console.log(listaDeNumerosEscolhidos);
    return numerosGerados;
   }
}

function limparBarra() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparBarra();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}