// par nome/valor
const saudacao = 'Opa!' // contexto léxico 1

function exec() {
    const saudacao = 'Faaala!' // contexto léxico 2
    return saudacao
}

// const saudacao =  'Epa!' // gera erro

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua da Hora',
        numero: 666
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)