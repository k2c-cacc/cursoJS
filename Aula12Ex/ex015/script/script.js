function verificar() {
    //alert('Olá!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) { // Essa conversão não é necessária o JS consegue resolver
        window.alert('[Erro] verifique os dados informados e tente novamente')
    } else {
        window.alert('Tudo Ok!')
    }
}
