/* Fórmula = X = V0X . t
V0X = V0 . cosk */

// Função para fazer o cálculo e retornar o tempo.
const retorno = (vinicial, cos45, tempo) => {
    let fdistance = (vinicial * cos45) * tempo   
    return fdistance
}

// Declaração e retorno.
let fresult = retorno(22.22, 0.5253, 5 )
console.log("A Distância percorrida pela banana em metros é de aproximadamente: " + fresult)
