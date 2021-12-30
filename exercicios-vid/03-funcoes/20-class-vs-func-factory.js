// Classe {
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p1 = new Pessoa("João")
p1.falar()
const p2 = new Pessoa("Elayne")
p2.falar()
// } Classe

// Factory {
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`)
    }
}

const p3 = criarPessoa("Sarah")
p3.falar()
const p4 = criarPessoa("Julia")
p4.falar()
// } Factory

/* Com a Factory function evitamos o problemas de ter que usar this.,
que pode variar de acordo com o contexto. */