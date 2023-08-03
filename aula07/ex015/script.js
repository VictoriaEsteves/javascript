function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.querySelector('div.res')

    if(fano.value.length == 0 || Number(fano.value) > ano || fano.value.length < 4) {
        window.alert('Verifique se os dados estão corretos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', '')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 18) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        resp.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
    }
}