let num = document.querySelector('input#num')
let list = document.querySelector('lstNum')
let res = document.querySelector('div#res')
let valores = []

function isnumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adcionar() {
    if(isnumber(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado`
        let item = document.createElement('option')
        list.appendChild(item)
    } else {
        window.alert('Coloque um numero valido!')
    }
} 