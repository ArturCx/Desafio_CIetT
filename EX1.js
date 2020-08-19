// Função para fazer o cálculo e retornar o tempo.
const retorno = (tdistance, speed) => {
    let fdistance = (tdistance/speed)/24   
    return fdistance
}

// Declaração e retorno.
let fresult = retorno(149600000, 28440)
console.log("O tempo em dias necessário para chegarmos em Zebes é de: " + fresult + " dias")

