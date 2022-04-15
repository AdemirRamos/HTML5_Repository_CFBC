window.onscroll = function() {
    rolar()
}

function rolar() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName('header')[0].style.padding = '30px 10px'
        document.getElementById('logo').style.fontSize = '25px'
    }
    
    //"scrollTop": https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollTop
    //"documentElement": https://developer.mozilla.org/pt-BR/docs/Web/API/Document/documentElement

    else {
        document.getElementsByTagName('header')[0].style.padding = '80px 10px'
        document.getElementById('logo').style.fontSize = '35px'
    }
}
