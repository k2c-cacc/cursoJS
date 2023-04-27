function verificarEntrada() {
    NomeConvidado = window.document.getElementById('nome').value;
    ConvidadosCristian = [ 'Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        window.document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        window.document.getElementById('PermissaoDeEntrada').innerText = 'Você não tem permissão para entrar!'
    }
}