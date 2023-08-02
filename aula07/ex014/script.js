function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h2>Agora são ${hora} Horas</h2>`

    if (hora >=0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/Foto-manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/Foto-tarde.jpg'
    } else {
        //Boa noite
        img.src = 'imagens/Foto-noite.jpg'
    }
}