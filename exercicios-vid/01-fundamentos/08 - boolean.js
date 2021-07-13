let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'string')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(Ativo = true))
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) 
// dar um valor padrão para uma variável

let nome1 = ''
nome1 = 'Lietuva'
// nome = 'Lithuania'
// o ActionScript não imprime uma variável vazia.

console.log(nome1 || 'Desconhecido')
/* o operador || (or) irá verificar se o primeiro valor é verdadeiro;
 * se for falso, irá verificar o próximo elemento; o primeiro valor
 * verdadeiro será impresso. */

let nome2 = ''
console.log(nome2 || 'Desconhecido')
/* o operado || imprime 'Desconhecido' pois nome2 retorna false, pois é
 * uma string vazia. */
