const acordeon_array = document.getElementsByClassName('acordeon')

for (let i = 0; i < acordeon_array.length; i++) {
    acordeon_array[i].addEventListener('click', function() {
        this.classList.toggle('selecionado') //Checar "toggle".
        const painel = this.nextElementSibling //Checar.
        
        "nextElementSibling": https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
        "this": https://desenvolvimentoparaweb.com/javascript/this-javascript-dominando/

        if (painel.style.maxHeight) {
            painel.style.maxHeight = null
        }

        else {
            painel.style.maxHeight = painel.scrollHeight+'px'
        }
    })
}
