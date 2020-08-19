// Função para fazer o cálculo e retornar o tempo.
const retorno = (LETRAS, NUMEROS) => {
    let possibilidades = LETRAS * NUMEROS 
    return possibilidades
}

const retorno2 = (TEMPO) => {
    let testedocodigo = (TEMPO * 40320) / 3600
    return testedocodigo
}

// Declaração e retorno.
// LETRAS = (6 x 5 x 4) = 120
// NUMEROS = (8 x 7 x 6) = 336
let fresult = retorno(120,336)
let teste = retorno2(2)
console.log("O número de possibilidades para o código é: " + fresult)
console.log("O tempo necessário em horas que Lara levaria para testa-los é: " + teste)