// o this é fixo ao usar arrow function, em relação ao  contexto onde
// a função foi escrita. 

function Pessoa() {
    this.idade = 0

    /* setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000) */

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa