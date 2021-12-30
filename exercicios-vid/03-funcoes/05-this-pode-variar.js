// A Arrow function não varia o this no browser (só funciona no browser)
const f1 = () => console.log(this === window)

// Diferente das funções tradicionais
function f2() { console.log(this === window) }

f1()
f2()