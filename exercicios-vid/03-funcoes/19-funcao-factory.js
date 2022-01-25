// Factory simples
function createPerson(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

function createProduct(nome, tipo, preco, desconto=0.1) {
    return {
        nome,
        tipo,
        preco: `R$${preco.toPrecision(3)}`,
        preco_final: `R$${(preco - (preco * desconto)).toPrecision(3)}`
    }
}

console.log(createPerson("Ana Clara", "Caviar"))
console.log(createProduct("Água mineral", "Bebida", 2.5))
console.log(createProduct("Coca Cola", "Bebida", 4.495))
console.log(createProduct("Tubaína", "Bebida", 4.995, 0.2))
