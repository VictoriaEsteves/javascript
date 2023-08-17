let num = document.getElementById('num')
let valores = []

function enviar() {
    let numdig = Number(num.value)
    if (numdig == " ") {
        window.alert('Por favor, digite um numero!')
    } else if (numdig > 100) {
        window.alert('Por Favor digite um valor dentro do pedido!')
    }
}