
// agora pegando o horario do pc :P
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 0 && hora <= 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Boa Manha!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}



// Meu senhor como foi difícil para mim, mas aprendi 
// Esse comentario de baixo foi quando eu consegui a primeira vez e fui tentar de novo!
/*

if (hora >= 0 && hora <= 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

*/