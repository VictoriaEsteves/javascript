let num = [5,2,9] //Ordem de vetores sempre começando pelo 0,1,2,3... 
num[3] = 6 // Específicar que o o vetor desejado fique na casa 3 
num.push(7) // Colocar o vetor desejado na ultima posição
num.length // Tamanho do vetor
num.sort() // Organizar em ordem decrescente


for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}

/*
console.log(`O nosso vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor é ${num[0]}`) //No caso ele mostra 2 como primeiro valor pois com o .sort() ele foi reorganizado.
console.log(`O segundo valor é ${num[1]}`)
console.log(`O terceiro valor é ${num[2]}`)
console.log(`O quarto valor é ${num[3]}`)
console.log(`O quinto valor é ${num[4]}`)
*/