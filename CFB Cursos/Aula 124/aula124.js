var i = 0
var texto = 'CFB Cursos - Curso de HTML Completo e Profissional - www.youtube.com/cfbcursos'
var velocidade = 150 //Aumente o valor para diminuir a velocidade; diminua o valor para aumentar a velocidade.

function digitação() {
    if (i < texto.length) {
        document.getElementById('texto').innerHTML += texto.charAt(i)
        i++
        
        //"charAt": https://www.w3schools.com/jsref/jsref_charat.asp

        //Alterando o intervalo de "STO":

        //velocidade = Math.round(Math.random()*150)

        setTimeout(digitação, velocidade)
    }
}
