function mostrar_menu() {
    document.getElementsByClassName('dropdown_conteúdo')[0].classList.toggle('mostrar_menu')
}

window.onclick = function(event) {
    if (!event.target.matches('.botão_dropdown')) {
        let dropdown = document.getElementsByClassName('dropdown_conteúdo')
        
        //"target": https://www.w3schools.com/jsref/event_target.asp
        //"currentTarget": https://www.w3schools.com/jsref/event_currenttarget.asp
        //"matches": https://www.w3schools.com/jsref/met_element_matches.asp
        
        for (let i = 0; i < dropdown.length; i++) {
            let abrir_dropdown = dropdown[i]

            if (abrir_dropdown.classList.contains('mostrar_menu')) {
                abrir_dropdown.classList.remove('mostrar_menu')
                
            //"contains": https://www.w3schools.com/jsref/jsref_includes_array.asp
            //"currentTarget" Vs. "target": https://www.jstips.co/en/javascript/difference-between-target-and-currentTarget/
            }
        }
    }
}
