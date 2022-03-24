const acordeon_array = document.getElementsByClassName('acordeon')

for (let i = 0; i < acordeon_array.length; i++) {
    acordeon_array[i].addEventListener('click', function() {
        this.classList.toggle('selecionado')
        const painel = this.nextElementSibling
        
        "nextElementSibling": https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
        "this": https://desenvolvimentoparaweb.com/javascript/this-javascript-dominando/

        if (painel.style.maxHeight) {
            painel.style.maxHeight = null
        }

        else {
            painel.style.maxHeight = painel.scrollHeight + 'px'
        }
        
        "scrollHeight": https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
        "maxHeight": https://www.w3schools.com/cssref/pr_dim_max-height.asp
    })
}
