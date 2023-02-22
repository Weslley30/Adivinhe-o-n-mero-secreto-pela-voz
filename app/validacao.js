function verificaSeChuteEValido(chute){
    //esse +chute já faz a conversão de uma string para numero
    const numero = +chute
    
    if(SeChuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>'
    }

    if(numeroForMAiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>valor invalido! somente entre ${menorValor} ou ${maiorValor} são validos</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto foi descoberto</h3>
        <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>`
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>o número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }else {
        elementoChute.innerHTML += `<div>o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function SeChuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMAiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
})