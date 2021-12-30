/* 
Funções podem ser:
 - passadas como parâmetros em Javascript
 - armazenadas em variáveis
First-class object (citizen)
High-order function 
*/

// Criar literalmente
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { return "Oba!" }
console.log(obj.falar())

// Passar como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log("Executando...") })

// Uma funcção pode retornar/conter umaa função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
const cincoMais = soma(2, 3)
cincoMais(4)