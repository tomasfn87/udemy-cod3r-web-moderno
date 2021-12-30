const valor = "Global"

function minhaFuncao() {
    console.log(valor)
} 
// A função em Js herda informações sobre o contexto de sua criação;

const outraFuncao = () => {
    const valor = "Local - outraFuncao"
    console.log(valor)
}

// já a Arrow Function funciona de forma um pouco diferente.

function exec() {
    const valor = "Local - exec"
    minhaFuncao()
    outraFuncao()
}

exec()