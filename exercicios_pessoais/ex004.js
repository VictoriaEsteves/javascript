var ano = 2020

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log('O ano é bissexto')
} else {
    console.log('O ano nao é bissexto')
}