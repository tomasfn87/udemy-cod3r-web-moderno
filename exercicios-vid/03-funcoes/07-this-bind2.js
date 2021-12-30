function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 10**3)
}

new Pessoa 