let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let valores = []

function isnum(n) {

    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isnum(num.value) && !inList(num.value, valores)) {

    } else {
        window.alert('Valor invalido ou já obtido!')
    }
}