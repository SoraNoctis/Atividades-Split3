var ativo = true
var mesagem = "Olá mundo!"

if (ativo) {
    console.log(mesagem)
} else {
    console.log("Deu pau...")
    console.log("")
}


console.log("--------------------------------------")


var sinalDeTrasito = "Verde"
var acao = ""

if (sinalDeTrasito == "Verde") {
    acao = "passae"
} else if (sinalDeTrasito == "Amarelo") {
    acao = "cuidado"
} else {
    acao = "FREIAAAA!!!!!!!!"
}

console.log(acao)

console.log("")
console.log("--------------------------------------")

let mesAtual = "Setembro"
let numMes = 0

switch (mesAtual) {
    default:
        numMes = "UNKNOW"
        break

    case "Janeiro":
        numMes = 1
        break

    case "Fevereiro":
        numMes = 2
        break
    
    case "Maio":
        numMes = 5
        break
        
    case "Julho":
        numMes = 7
        break

    case "Setembro":
        numMes = 9
        break
    
    case "Outubro":
        numMes = 10
        break
}

console.log(numMes)
console.log("")

