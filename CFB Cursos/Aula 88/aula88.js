//As versões mais recentes do JS recomendam que, caso uma variável seja destinada a guarda elementos, ela deve ser "const".

//Seja em JS ou CSS, os colchetes servem para selecionar parâmetros.

const elementos = document.querySelectorAll('[data-animação]')

const animação_classe = 'animação'

function animação_scroll() {
    const topo_página_janela = window.pageYOffset((window.innerHeight * 3) / 4) //Três quartos da janela como referência.
    //Definindo de onde a animação vai partir. Quanto mais se somar a esse comando, mais embaixo a animação será iniciada.

    elementos.forEach(function(elemento) { //Cada item de "elementos" será repassado para "elemento".
        if (topo_página_janela > elemento.offsetTop) {
            elemento.classList.add(animação_classe)
        }

        else {
            elemento.classList.remove(animação_classe)
        }
    })
}

//Verificando se os elementos da página, eventualmente, precisarão receber a animação:

if (elementos.length) { //0 == false; 1 == true.
    window.addEventListener('scoll', function () {
        animação_scroll
    })
}
