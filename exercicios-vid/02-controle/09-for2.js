const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {

    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64,
}

for (let props in pessoa) {
/* o let visa proteger a variável; se não for adicionado,
o console.log abaixo não irá gerar erro. */
    console.log(`${props} = ${pessoa[props]}`)
}

console.log(props)