function pesquisar() {
    var input, filtro, menu, menu_itens, links

    input = document.getElementById('pesquisa')
    filtro = input.value.toUpperCase() //Conversão para maiúsculo (de toda a "string").

    menu = document.getElementById('menu')
    menu_itens = menu.getElementsByTagName('li') //Observação: a captura dos elementos da "tag li" começa a partir da "menu".

    for (let i = 0; i < menu_itens.length; i++) {
        links = menu_itens[i].getElementsByTagName('a')[0]
        //Observação: novamente: ao invés de iniciar o processo por "document", começamos por outro elemento.

        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) { //Pesquisar "indexOf()".
            menu_itens[i].style.display = ''
        }

        else {
            menu_itens[i].style.display = 'none'
        }
    }
}
