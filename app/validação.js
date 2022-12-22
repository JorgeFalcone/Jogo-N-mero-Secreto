const resposta = document.querySelector(".resposta")

function verificaSeOChutePossuiUmValorValido(voz) {
    const numero = +voz

    if (vozInvalido(numero)){
        resposta.innerHTML = 'Valor inválido: isso não é um número'
    }

    if (numeroFora(numero)){
        resposta.innerHTML = `Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}`
    }

    if (numero === numeroSecreto) {
        resposta.innerHTML = `Parabéns você acertou <i class="fa-solid fa-award"></i>`
        botao.innerHTML = "Tentar novamente"
        botao.addEventListener("click", () => window.location.reload())
    }

    else if (numero < numeroSecreto && numero >= menorValor) {
        resposta.innerHTML = `O número secreto é maior <i class="fa-solid fa-circle-arrow-up">`
    }

    else if (numero > numeroSecreto && numero <= maiorValor) {
        resposta.innerHTML = `O número secreto é menor <i class="fa-solid fa-circle-arrow-down">`
    }
}

function vozInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroFora(numero){
    return numero > maiorValor || numero < menorValor
}