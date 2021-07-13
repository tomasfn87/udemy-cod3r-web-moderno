console.log(7 / 0)

console.log('10' / 2) // Operação é realizada, string vira number
/* Como não faz sentido operar divisão em string, o ActionScript tenta
 * fazer a conversão para number e, já que são números dentro da string,
 * o procedimemto funciona e a operação é realizada. */

console.log('3' - 2)
/* O mesmo valerá para subtração, ou seja, o ActionScript, não vendo 
 * sentido na operação, tentará converter a string para number e 
 * realizará a operação matemática. */

console.log('3' + 2) // String converte o number como string e concatena
/* Nesse caso faz sentido somar strings, então, o ActionScript soma 
 * (concatena) - as strings. */

console.log('Show' * 2)
// NaN = Not a Number
console.log('Not a Number')

console.log(0.1 + 0.2)
console.log(0.1 + 0.7)
// Gera imprecisão

console.log('10.345 ->', (10.345).toFixed(1))
console.log('10.345 ->', (10.345).toFixed(2))
// console.log(10.toString())