var vídeo = document.getElementById('meu_vídeo')
var botão = document.getElementById('botão_pausa')

function pausar_vídeo() {
    if (vídeo.paused) {
        vídeo.play()
        botão.innerHTML = 'Pausar'
    }

    else {
        vídeo.pause()
        botão.innerHTML = 'Play'
    }
}
