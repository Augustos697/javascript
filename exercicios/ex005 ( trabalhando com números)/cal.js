let res = window.document.getElementById('calculo')
let val = 0
function calcular(){
    val = window.prompt('Digite um número:')
    res.innerHTML = (`<p> O dobro de ${val} é ${val*2} e a metade é ${val/2} </p>`)
}