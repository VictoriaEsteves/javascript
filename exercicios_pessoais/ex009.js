var nome = "Victoria"
var peso = 75
var altura = 1.68
var imc = Number(peso / (altura * altura))

if (imc < 18) {
    console.log('Abaixo do peso')
} else if (imc <= 24.9) {
    console.log('Peso normal')
} else if (imc <= 29.9) {
    console.log('Sobrepeso')
} else if (imc <= 34.99) {
    console.log('Obesidade Grau I')
} else if (imc <= 39.99){
    console.log('Obesidade Grau II')
} else {
    console.log('Obesidade Grau III')
}

console.log(`${nome}, seu IMC é de ${imc.toFixed(1)}`)