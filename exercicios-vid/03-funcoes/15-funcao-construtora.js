function Carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = (() => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    })

    // método público
    this.getVelocidadeAtual = (() => {
    // this. torna a função pública (em oposição a const ou let)
        return velocidadeAtual
    })
}

const uno = new Carro
for (i = 0; i < 20; i++) { uno.acelerar() }
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
for (i = 0; i < 5; i++) { ferrari.acelerar() }
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof uno + ", " + typeof ferrari)