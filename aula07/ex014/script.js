function carregar() {
    
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} Horas</h2>`

    if (hora >=0 && hora < 12) {
        //Bom dia!
        img.src = 'Foto-manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
    } else {
        //Boa noite
    }
}