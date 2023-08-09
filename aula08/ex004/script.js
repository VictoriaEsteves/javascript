
function contar() {
    var numini = document.getElementById('inicio') 
    var numfim = document.getElementById('fim') 
    var numpass = document.getElementById('passo')

    var res = document.querySelector("div p")

if (numini <=0 || numfim <= 0 || numpass <= 0) {
    window.alert('Faltam numero')
} else {
    res.innerHTML = 'Contando:'
    var i = Number(numini.value)
    var f = Number(numfim.value)
    var p = Number(numpass.value)
}

for(var c = i; c <= f; c += p) {
    res.innerHTML += ` ${c} ` 
}
    
}