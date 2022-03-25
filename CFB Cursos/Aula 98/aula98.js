function pesquisar() {
    var input, filtro, menu, menu_itens, links

    input = document.getElementById('pesquisa')
    filtro = input.value.toUpperCase() //Conversão para maiúsculo (de toda a "string").

    menu = document.getElementById('menu')
    menu_itens = menu.getElementsByTagName('li') //Observação: a captura dos elementos da "tag li" começa a partir da "menu".

    for (let i = 0; i < menu_itens.length; i++) {
        links = menu_itens[i].getElementsByTagName('a')[0]
        //Observação: novamente: ao invés de iniciar o processo por "document", começamos por outro elemento.

        if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            menu_itens[i].style.display = ''
            
            //Explicação: caso o teste lógico seja verdadeiro, a "menu_itens" na posição "i" não terá o seu "display" ("block") alterado.
        }
        
        "indexOf": https://programandosolucoes.dev.br/2021/01/19/indexof-javascript/

        else {
            menu_itens[i].style.display = 'none'
        }
    }
}
