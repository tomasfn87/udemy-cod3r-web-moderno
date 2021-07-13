/*  A variável var pode ser acessada de dentro do bloco que a contém
 *  e de fora também. */

{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera) 
            }
            
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local)

/* Deve-se evitar a criação de variáveis globais, pois, apesar de serem
 * acessíveis globalmente, uma linha de comando errada pode
 * sobrescrever a variável - esse cuidado deve ser tomado especialmente
 * ao se trabalhar o lado do browser (FrontEnd).
 * 
 * window - variável global no browser
 * global -     "       "   em node */