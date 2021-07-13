const values = [1, 2, 2.1, 7, 0.3]
console.log(values[0], values[3])
console.log(values[5])

values[10] = 10
console.log(values)
console.log(values.length)

values.push({ firstName: 'Camila' }, false, null, NaN, 'text')
console.log(values)

console.log(values.pop())
delete values[0]
console.log(values)

console.log(typeof values)