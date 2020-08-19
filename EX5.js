// (100 - 30 = 70) 70 gostam de viver no Chocolate Island e Cookie Mountain.
// (180 - (30 + 70) = 80) 80 gostam de viver Yoshi's Island e Cookie Mountain.
// (200 - (80 + 70 + 30) = 20) 20 gostam de viver Yoshi's Island e Chocolate Island.
// (340 - (80 + 70 + 30) = 160) 160 gostam de viver Cookie Mountain.
// (330 - (70 + 20 + 30) = 210) 210 gostam de viver no Chocolate Island.
// (450 - (80 + 30 + 20) = 320) 320 gostam de viver no Yoshi's Island.
// TOTAL = 320 + 210 + 160 + 70 + 80 + 30 + 20 = 890
// (1000 - 890 = 110) 110 NÃO gostam de nenhuma destas localidades.

let A,B,C

// Função para fazer o cálculo e retornar o tempo.
const retorno = (AB, AC, BC, ABC) => {
    A = 450 - (80 + 30 + 20)
    B = 330 - (70 + 20 + 30)
    C = 340 - (80 + 70 + 30)
    let naogosta = 1000 - (A + B + C + AB + AC + BC + ABC)   
    return naogosta
}

// Declaração e retorno.
let naogosta = retorno(20, 80, 70, 30) 
console.log("O número de Yoshis que não gostam de nenhuma destas localidades é: " + naogosta)
console.log("O número de Yoshis que gostam apenas da Yoshi's Island é: " + A)
console.log("O número de Yoshis que gostam apenas da Chocolate Island é: " + B)
console.log("O número de Yoshis que gostam apenas da Cookie Mountain é: " + C)