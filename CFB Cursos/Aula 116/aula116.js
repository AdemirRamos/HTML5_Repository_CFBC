function gerenciar_imagens(c) {
    var x, i

    x = document.getElementsByClassName('imagem')

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }

    if (c == 'tudo') {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block'
        }
    }

    else {
        x = document.getElementsByClassName(c)

        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block'
        }
    }
}

var botões = document.getElementsByClassName('botão')

for (i = 0; i < botões.length; i++) {
    botões[i].addEventListener('click', function() {
        var botão_clicado = document.getElementsByClassName('botão_ativo')[0]
        botão_clicado.className = botão_clicado.className.replace('botão_ativo', '')
        this.className += ' botão_ativo'
    })
}

gerenciar_imagens('tudo')
