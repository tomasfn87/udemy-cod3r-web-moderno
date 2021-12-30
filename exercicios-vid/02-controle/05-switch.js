const imprimirResultado = ((nota) => {
    console.log("Nota =", nota)
    switch (Math.floor(nota)) {
        case 10: // o valor de nota passará por todos os elementos, 
        case 9: // a não ser que tenha um break
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4: case 3: case 2:
            console.log("Recuperação")
            break
        case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nota inválida")
    }
})

imprimirResultado(1)
imprimirResultado(3.5)
imprimirResultado(7.5)
imprimirResultado(9.5)
imprimirResultado(10)
imprimirResultado(-1)
imprimirResultado(11)

console.log(Math.ceil(9.7)) // Arredondar pra cima
console.log(Math.floor(9.7)) //     "     pra baixo