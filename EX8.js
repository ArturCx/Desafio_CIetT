// Fórmula: 2^n-1

// Função para fazer o cálculo e retornar o tempo.
const retorno = (N) => {
    let possibilidades = (2**N) - 1  
    return possibilidades
}

// Declaração e retorno.
let fresult = retorno(5)
console.log("o número mínimo de movimentos necessários para mover todos os discos corretamente é: " + fresult)