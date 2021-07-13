/*
 * AND:
 * v e v -> v
 * v e f -> f
 * f e ? -> f
 *
 * op1 AND op2 AND op2 AND op3 -> v
 * Todos os operandos devem ser verdadeiros.
 * 
 * OR:
 * v ou ? -> v
 * f ou v -> v
 * f ou f -> f
 *
 * XOR:
 * É verdadeiro quando os dois operadores forem diferentes.
 * v xor v -> f
 * v xor f -> f
 * f xor v -> v
 * f xor f -> f
 *
 * !v -> f
 * !f -> v */

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))