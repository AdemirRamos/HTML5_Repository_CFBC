window.onscroll = function() {
    rolar()
}

function rolar() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { //Checar.
        document.getElementsByTagName('header')[0].style.padding = '30px 10px'
        document.getElementById('logo').style.fontSize = '25px'
    }

    else {
        document.getElementsByTagName('header')[0].style.padding = '80px 10px'
        document.getElementById('logo').style.fontSize = '35px'
    }
}