function verificar() {
    //alert('Olá!')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) { // Essa conversão não é necessária o JS consegue resolver
        window.alert('[Erro] verifique os dados informados e tente novamente')
    } else {
        //window.alert('Tudo Ok!')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        //var img = document.querySelector('img#foto')
        var img = document.createElement('img') // Criando uma TAG img
        img.setAttribute('id', 'foto') // Como se tivesse criado manualmente <img id="foto"> em modelo.html
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/r_crianca_masculino.png')
            } else if (idade < 21) {
                // Adolescente
                //alert('Adolescente')
                img.setAttribute('src', './imagens/r_adolescente_masculino.png')
            } else if (idade < 50) {
                // Adulto
                //alert('Adulto')
                img.setAttribute('src', './imagens/r_adulto_masculino.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/r_idoso_masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/r_crianca_feminino.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', './imagens/r_adolescente_feminino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/r_adulto_feminino.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/r_idoso_feminino.png')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
