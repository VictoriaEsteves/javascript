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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        list.appendChild(item)
    } else {
        window.alert('Valor invalido ou já obtido!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione dados para fazer os calculos')
    } else {
        let tot = valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} Numeros Cadastrados</p>`
    }
}