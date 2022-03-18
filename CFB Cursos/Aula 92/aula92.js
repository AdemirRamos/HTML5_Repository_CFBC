//As versões mais recentes do JS recomendam que, caso uma variável seja destinada a guardar elementos, ela deve ser declarada como "const".

//Seja em JS ou CSS, os colchetes servem para selecionar parâmetros.

const elementos = document.querySelectorAll('[data-animação]')

const animação_classe = 'animação'

function animação_scroll() {
    const topo_página_janela = window.pageYOffset + ((window.innerHeight * 3) / 4) //Três quartos da janela como referência.
    //Definindo de onde a animação vai partir. Quanto mais se somar a esse comando, mais embaixo a animação será iniciada.

    //Explicação "pageYOffset": https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
    //Explicação "innerHeight": https://developer.mozilla.org/pt-BR/docs/Web/API/Window/innerHeight

    elementos.forEach(function(elemento) { //Cada item de "elementos" será repassado para "elemento".
        if (topo_página_janela > elemento.offsetTop) {
            elemento.classList.add(animação_classe)
            
            //Explicação "offsetTop": https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/offsetTop
            //Explicação "classList": https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
            //Explicação "forEach": https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        }

        else {
            elemento.classList.remove(animação_classe)
        }
    })
}

//Verificando se os elementos da página, eventualmente, precisarão receber a animação:

if (elementos.length) { //0 == false; 1 == true.
    window.addEventListener('scoll', function() {
        animação_scroll()
    })
}

function clique_modal(img) {
    const janela_modal = document.getElementById('janela_modal')
    const imagem_modal = document.getElementById('imagem_modal')
    const texto_modal = document.getElementById('texto_modal')
    const botão_fechar = document.getElementById('botão_fechar')

    janela_modal.classList.remove('ocultar_janela_modal') //Conferir "classList".
    janela_modal.classList.add('mostrar_janela_modal')

    imagem_modal.src = img.src //É capturado o "src" do elemento passado como parâmetro da função.
    imagem_modal.alt = img.alt //O "alt" da imagem passada como parâmetro é capturado.
    imagem_modal.innerHTML = img.alt //O conteúdo de "alt" será exibido na tela.

    botão_fechar.onclick = function() {
    janela_modal.classList.add('ocultar_janela_modal')
    janela_modal.classList.remove('mostrar_janela_modal')
    }
}
