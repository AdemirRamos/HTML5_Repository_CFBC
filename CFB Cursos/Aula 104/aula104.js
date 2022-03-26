function mostrar_menu() {
    document.getElementsByClassName('dropdown_conteúdo')[0].classList.toggle('mostrar_menu')
}

window.onclick = function(event) {
    if (!event.target.matches('.botão_dropdown')) {
        let dropdown = document.getElementsByClassName('dropdown_conteúdo')
        
        //"target": https://www.w3schools.com/jsref/event_target.asp
        //"matches": https://www.w3schools.com/jsref/met_element_matches.asp
        
        for (let i = 0; i < dropdown.length; i++) {
            let abrir_dropdown = dropdown[i]

            if (abrir_dropdown.classList.contains('mostrar_menu')) {
                abrir_dropdown.classList.remove('mostrar_menu')
                
            //"contain": https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
            }
        }
    }
}
