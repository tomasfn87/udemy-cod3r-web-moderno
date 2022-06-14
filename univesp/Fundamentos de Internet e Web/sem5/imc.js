const mostraIMC = () => {
    paragrafo = document.getElementById('imc-paragrafo')
    resultado = document.getElementById('imc-resultado')
    imc = calculaIMC()

    if (imc != 'NaN') {
        resultado.innerText = imc
        paragrafo.style.visibility = 'visible'
    } else {
        paragrafo.style.visibility = 'hidden'
    }    
}

const calculaIMC = () => {
    peso = parseFloat(document.formulario.peso.value.replace(',', '.'));
    altura = parseFloat(document.formulario.altura.value.replace(',', '.'));
    imc = peso / (altura * altura)
    return imc.toFixed(2).replace('.', ',')
}