const soBoaNoticia = ((nota) => {
    if (nota >= 7) {
        console.log("Parabéns, vocÊ foi aprovada!")
    } else if (nota >= 2) {
        console.log("Você está de recuperação! Vamos lá, é sua segunda chance!")
    } else {
        console.log("Infelizmente você foi reprovado nessa matéria.")
    }
})

const nota1 = 1.1
const nota2 = 4.2
const nota3 = 9.2
console.log("Nota =", nota1)
soBoaNoticia(1.1)
console.log("Nota =", nota2)
soBoaNoticia(4.2)
console.log("Nota =", nota3)
soBoaNoticia(9.2)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log("É verdade..." + valor)
    } else {
        console.log("C'est faux!")
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo(["gato","garrafa"])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({nome: "Roof", type: "dog"})