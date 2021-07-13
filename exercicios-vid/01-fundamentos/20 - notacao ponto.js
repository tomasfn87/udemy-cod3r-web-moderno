console.log(typeof console)
console.log(typeof console.log)
console.log(typeof Math)
console.log()

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = {}
obj4 = { nome: 'Bolas' }

// obj1.nome = 'Bola 2'
console.log(obj1.nome)
console.log(obj4.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()