function semRetorno() {
    console.log("Chamar Função")

}

semRetorno()

console.log("-----------------")

function comRetorno() {
    return 100
}

console.log("Soma = ", comRetorno() + 10)

console.log("-----------------")

function soma(arg1, arg2) {
    result = arg1 + arg2
    return result
}

console.log("Soma = ", soma(36,40))

console.log("-----------------")

var arrowFunction = () => {
    return ("Bilada " + 10000)
}

console.log(arrowFunction())

console.log("-----------------")

var arrowFunctionSeRetorn = () => {
    console.log("Sem retorno")
}

arrowFunctionSeRetorn()

console.log("-----------------")

var arrowComParametro = (param1, param2) => {
    result = param1 - param2
    return result
}

//console.log("Soma = ", arrowComParametro(49,39))

var guarda_retorno = arrowComParametro(49,39)
console.log(guarda_retorno)

console.log("-----------------")
