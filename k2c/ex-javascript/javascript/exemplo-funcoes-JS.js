console.log("Função")
var multiplicacao = function (x, y) {
     return x * y;
     }

var resultado = multiplicacao(5, 4);
console.log(resultado);

/*
console.log("Função")
function multiplicacao(x, y) {
    return x * y;
}

var resultado = multiplicacao(3, 2);
console.log(resultado);
*/
/*
console.log("Método")
var conta = {
    saldo: 0,
    deposita: function (valor) {
        this.saldo += valor;
    }
}

conta.deposita(100);
console.log(conta.saldo);
*/
/*
console.log("Apply")
var deposita = function (valor) {
    this.saldo += valor;
}

var conta = {
    saldo: 0
}

deposita.apply(conta, [200]);
console.log(conta.saldo);
*/
/*
console.log("Arguments")
var soma = function () {
    var soma = 0;

    for (var i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

var resultado = soma(2, 4, 5, 6, 1);

console.log(resultado);
*/
