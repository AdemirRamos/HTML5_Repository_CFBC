function mostrar_imagem(imagem) {
    const imagem_grande = document.getElementById('imagem_grande')
    imagem_grande.src = imagem.src
    imagem_grande.parentElement.style.display = 'block'
    
    //"parentElement": https://www.w3schools.com/jsref/prop_node_parentelement.asp
}
