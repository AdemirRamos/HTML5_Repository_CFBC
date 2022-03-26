const nav = document.getElementsByTagName('nav')[0]
const topo_nav = nav.offsetTop

"offsetTop": https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/offsetTop

window.onscroll = function() {
    fixar_menu_no_topo()

    //Ao se usar uma função anônima aqui, podemos chamar várias funções de uma só vez.
}

//"offSetTop" é um método que retorna a medida (em pixels) da distância de um elemento em relação ao topo do elemento-pai (anterior).

function fixar_menu_no_topo() {
    if (window.pageYOffset >= topo_nav) { //Checar "window.pageYOffset" - parece estar obsoleto.
        nav.classList.add('fixo_no_topo')
    }
    
    //"pageYOffSet": https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset

    else {
        nav.classList.remove('fixo_no_topo')
    }
}
