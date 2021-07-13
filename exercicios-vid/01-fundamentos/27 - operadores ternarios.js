const resultado = nota            =>        nota >= 7       ?        "Aprovado" : "Reprovado"
//     funcao   paramêtro   arrow function    pt1       op.ternário      pt2          pt3
console.log(resultado(7.1))
console.log(resultado(6.9))

// Revisão arrow function, function

const soma =     (A,             B)              =>          A       +        B
//   funcao  (paramêtro 1,   paramêtro 2)  arrow function   pt1  op.binário  pt2


const adicao = (A, B) => {
    console.log("A + B (" + A + " + " + B + ")")
    return A + B
}


function subtracao      (A,           B)            {
//        funçao    (parâmetro 1, parâmetro 2)       corpo
    console.log("A - B (" + A + " - " + B + ")")
    return A - B
}

const multiplicacao = (A, B) => {
    console.log("A x B (" + A + " x " + B + ")")
    return A * B
}

/* O que faremos? Nome_da_funcao. 
 * A quem será feito? A e B, parâmetros de Nome_da_funcao. 
 * O que faremos com A e B? Corpo '{}' da função. Após 'return',
 * a função é encerrada; é a última linha da função por definição (?)
 */
console.log(soma(100, -100))
console.log(adicao(2, 3))
console.log(subtracao(5, 2))
console.log(multiplicacao(2, 4))