function mostrar_menu() {
    document.getElementsByClassName('dropdown_conteúdo')[0].classList.toggle('mostrar_menu')
}

window.onclick = function(event) { //Checar.
    if (!event.target.matches('.botão_dropdown')) { //Checar.
        let dropdown = document.getElementsByClassName('dropdown_conteúdo')

        for (let i = 0; i < dropdown.length; i++) {
            let abrir_dropdown = dropdown[i]

            if (abrir_dropdown.classList.contains('mostrar_menu')) { //Checar.
                abrir_dropdown.classList.remove('mostrar_menu')
            }
        }
    }
}
