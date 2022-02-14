function abrir_tab(evento, tab_nome) {
    const conteúdo_tab = document.getElementsByClassName('conteúdo_tabs')

    for (let i = 0; i < conteúdo_tab.length; i++) {
        conteúdo_tab[i].style.display = 'none'
    }

    const botão_tabs = document.querySelectorAll('[data-botão_tab]')

    for (let i = 0; i < botão_tabs.length; i++) {
        botão_tabs[i].classList.remove('active')
    }

    document.getElementById(tab_nome).style.display = 'block'
    evento.currentTarget.classList.add('active')
}

document.getElementById('primeira_tab').click()
