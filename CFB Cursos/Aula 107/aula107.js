var número_slide = 1
mostrar_slide(número_slide)

function mudar_slide(slide_number) {
    mostrar_slide(número_slide += slide_number)
}

function slide_atual(slide_number) {
    mostrar_slide(número_slide = slide_number)
}

function mostrar_slide(slide_number) {
    var i, slides, indicadores

    slides = document.getElementsByClassName('slide')
    indicadores = document.getElementsByClassName('indicador')

    if (slide_number > slides.length) {
        número_slide = 1
    }

    else if (slide_number < 1) {
        número_slide = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].display = 'none'
    }

    for (i = 0; i < indicadores.length; i++) {
        indicadores[i].className = indicadores[i].className.replace('ativo', '') //Removendo a classe "ativo".
    }

    slides[número_slide - 1].style.display = 'block' //"Arrays" começam com zero, por isso o -1.
    indicadores[número_slide].className += 'ativo'
}
