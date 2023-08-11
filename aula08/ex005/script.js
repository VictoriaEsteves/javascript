function Tabuada() {
    let num = document.getElementById('num');
    let tab = document.getElementById('lstTabu');

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        
        // Limpa as opções anteriores da lista
        tab.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.appendChild(item);
            c++;
        }
    }
}





/**
 
function Tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('lstTabu')

    if (num.value.length == 0){
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('Option')
            item.text = `${num} x ${c} = ${n * c}`
            tab.appendChild(item)
            C++
        }
    }
}
*/