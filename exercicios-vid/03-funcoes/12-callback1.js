const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

const frutas = ["maçã", "pera", "uva", "manga", "morango"]
const listar = (name, index) => console.log(`${index + 1} - ${name}`)
frutas.forEach(listar)