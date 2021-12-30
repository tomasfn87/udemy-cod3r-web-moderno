const teste1= ((num) => {
    if(num > 7)
        console.log(num) // A chave é opcional
        console.log("Final") // Essa linha está fora do if
})

teste1(6)
teste1(8)

const teste2 = ((num) => {
    if(num > 7); { // Cuidado com o ";". Não usar com as estruturas de controle.
        console.log(num)
    }
})

teste2(6)
teste2(8)

const teste3 = ((num) => {
    if(num > 7) {
        console.log(num)
    }
})

teste3(6)
teste3(8)