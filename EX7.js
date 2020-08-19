// Função para fazer o cálculo e retornar o tempo.
const retorno = (VELOCIDADE, COEF) => {
    let distancia = (VELOCIDADE**2) / COEF   
    return distancia
}

const retorno2 = (VELOCIDADE, COEF) => {
    let distancia = (VELOCIDADE**2) / COEF   
    return distancia
}

// Declaração e retorno.
let fresult = retorno(260, 1)
let fresult2 = retorno2(260, 250)
console.log("a reta terá que ter " + fresult + " metros para que seja possível frear totalmente o veículo.")
console.log("a reta terá que ter " + fresult2 + " metros para que seja possível frear totalmente o veículo.")