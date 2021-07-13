// Armazenando uma funcao em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 2)

// Armazenando uma função arrow em uma variável
const soma  =  (a, b)  => {
    return a + b
}

console.log(soma(6, 6))

//  retorno implícito
const subtracao  = (a, b) => a - b
console.log(subtracao(2, 2))

const  imprimir2  = a => console.log(a)
imprimir2('Legal!')