var tabu = document.getElementById('num').value
var c = tabu * 10
var res = document.querySelector('div#res')

function Tabuada() {
    if (tabu < 0) {
        window.alert('Por favor, coloque um numero positivo')
    }
}