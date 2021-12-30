/* Closure é o escopo criado quando uma função é declarada.
Esse escopo permite a função acessar e manipular variáveis externas
à função. */

// Contexto léxico em ação!

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const fora2 = () => {
    const x = "Local"
    function dentro2() {
        return x
    }
    return dentro2
}

const minhaFuncao = fora()
console.log(minhaFuncao())
/* console.log(fora)
console.log(fora()) */

const funcTeste = fora2()
console.log(funcTeste())
/* console.log(fora2)
console.log(fora2()) */