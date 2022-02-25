function mostrar_imagem(imagem) {
    const imagem_grande = document.getElementById('imagem_grande')
    imagem_grande.src = imagem.src
    imagem_grande.parentElement.style.display = 'block' //Checar.
}
