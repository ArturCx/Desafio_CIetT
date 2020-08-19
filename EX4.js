// Função para fazer o cálculo e retornar o tempo.
const retorno = (P1, P2, P3, P4) => {
    let possibilidades = P1 * P2 * P3 * P4   
    return possibilidades
}

// Declaração e retorno.
let fresult = retorno(1, 3, 3, 2)
console.log("o número de variações diferentes do nível que são possíveis é: " + fresult)