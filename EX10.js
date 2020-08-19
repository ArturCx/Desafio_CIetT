// Linha 1 → 1² = 1
// Linha 2 → 2² = 4
// Linha 3 → 3² = 
// Linha 4 → 4² = 16
// Linha 5 → 5² = 25
// ²√1969 = 44.3734154647 (Arredondando para o próximo número quadrado perfeito temos: 45 )

// Função para fazer o cálculo e retornar o tempo.
const retorno = () => {
    let raiz = Math.pow(1969, 0.5) + 0.62658453533242
    return raiz 
}

// Declaração e retorno.
let fresult = retorno()
console.log("A linha em que o número 1969 foi escrito é a linha: " + fresult)

