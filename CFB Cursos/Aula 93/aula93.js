const menu_icons = document.querySelectorAll('[data-menu]')
const css_ativo = 'ativo'

menu_icons.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        for (i = 0; i < menu_icons.length; i++) {
            menu_icons[i].classList.remove(css_ativo)
        }

        elemento.classList.add(css_ativo)
    })
})
