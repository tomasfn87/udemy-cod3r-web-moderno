function aleat( { min = 0, max = 1000 } ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(aleat(obj))
console.log(aleat({ min: 955 }))
console.log(aleat({}))
// console.log(aleat())