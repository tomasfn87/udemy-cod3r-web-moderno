const imprimirResultado = ((nota) => {
    if(nota>=7)
        console.log("Aprovado!")
    else
        console.log("Reprovado!")
    
})

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado("Epa!") // Não gera erro, pois JS é fracamente tipada