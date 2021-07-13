let numero = 1
// var numero = 1 
/* Funciona em ambos os casos, desde que a função em
 * em outro bloco seja do tipo let
 *
 * var - escopos:
 *   1) global
 *   2) função
 * 
 * let - escopos:
 *   1) global
 *   2) função
 *   3) bloco - {} */

{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)