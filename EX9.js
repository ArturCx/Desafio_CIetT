// Função para fazer o cálculo e retornar o tempo.
const retorno = (ATOTAL, ACENTRO) => {
    let ASETOR = (ATOTAL - ACENTRO) / 8
    return ASETOR
}

// Declaração e retorno.
let fresult = retorno(2827.43, 314.15)
console.log("O tamanho da área de busca do setor que os heróis estão é de: " + fresult + " Km²")