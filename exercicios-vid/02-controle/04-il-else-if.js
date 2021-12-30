Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = ((nota) => {
        if(nota.entre(9, 10)) {
            console.log("Quandro de Honra")
        } else if(nota.entre(7, 8.99)) {
            console.log("Aprovado")
        } else if(nota.entre(2, 6.99)) {
            console.log("Recuperação")
        } else if(nota.entre(0, 1.99)) {
            console.log("Reprovado")
        } else {
            console.log("Nota inválida")
        }
})

imprimirResultado(1)
imprimirResultado(3.5)
imprimirResultado(7.5)
imprimirResultado(9.5)
imprimirResultado(-1)
imprimirResultado(11)