var caixa_texto = document.getElementById('caixa_de_texto')
var texto = document.getElementById('texto_alerta')

caixa_texto.addEventListener('keyup', function(event) {
    if (event.getModifierState('CapsLock')) { //Checar.
        texto.style.display = 'block'
        
        //"getModifierState": https://www.w3schools.com/jsref/event_key_getmodifierstate.asp
    }

    else {
        texto.style.display = 'none'
    }
})
