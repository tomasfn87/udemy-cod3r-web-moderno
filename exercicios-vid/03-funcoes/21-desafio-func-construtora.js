function criarPessoa(nome) {
    this.falar = () => {
        console.log(`Meu nome é ${nome}.`)
    }
}

const p2 = new criarPessoa("Arquimedes")
p2.falar()