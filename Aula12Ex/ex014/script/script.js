/* alert('Olá!') */
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var hora = 15;
    msg.innerHTML=`Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        /* Bom dia! */
        img.scr = './imagens/foto_manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        /* Boa tarde! */
        img.scr = './imagens/foto_tarde.png'
        document.body.style.background = '#b9846f' 
    } else {
        /* Boa noite! */
        img.scr = './imagens/foto_noite.png';
        document.body.style.background = '#515154'
    }

}