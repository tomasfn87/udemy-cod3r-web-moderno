function Pessoa(nome) {
    this.falar = () => {
        console.log(`Me chamo ${nome}. Prazer em conhecê-los.`)
    }
}

const p2 = new Pessoa("Arquimedes")
p2.falar()
