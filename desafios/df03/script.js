
function comprar() {
    let prod = prompt('Qual produto você esta comprando?')
    let pre = parseFloat(prompt(`Quanto custa ${prod} que voce esta comprando?`))
    let din = parseFloat(prompt(`Qual foi o valor que você deu para pagar ${prod}?`))
    let tro = din - pre
    if (din >= pre) {
        window.alert(`Você comprou ${prod} que custou ${pre}. Você deu ${din} e vai receber ${tro.toFixed(2)} de troco`)
    } else if (tro <= 0 || din <= 0) {

        window.alert('O valor é abaixo do necessário!')
    } else {
        window.alert('Valor invalido!')
    }

}