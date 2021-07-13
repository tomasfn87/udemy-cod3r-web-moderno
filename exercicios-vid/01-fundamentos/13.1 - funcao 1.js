// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 2)
imprimirSoma(2)
imprimirSoma(5, 5, 5, 5)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(4, 4))
console.log(soma(4))
console.log(soma())