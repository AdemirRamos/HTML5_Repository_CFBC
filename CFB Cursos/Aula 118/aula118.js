function leia_mais() {
    var pontos = document.getElementById('reticências')
    var mais_texto = document.getElementById('mais')
    var botão = document.getElementById('botão_leia_mais')

    if (pontos.style.display === 'none') {
        pontos.style.display = 'inline'
        mais_texto.style.display = 'none'
        botão.innerHTML = 'Leia Mais'
    }

    else {
        pontos.style.display = 'none'
        mais_texto.style.display = 'inline'
        botão.innerHTML = 'Leia Menos'
    }
}
