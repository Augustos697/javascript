var val1 = 0
let res = window.document.getElementById("res")
function calcular(){
    val1 = window.prompt('Digite um número:')
    v1 = Number(val1)
    res.innerHTML = (`O seu valor absoluto é ${v1} <br> A sua parte inteira é ${Number.parseInt(v1)}<br> A raiz quadrada é ${Math.sqrt(v1)}<br>
    A raiz cubica é ${Math.cbrt(v1)}<br>
    O valor de ${v1}² é  ${v1**2} <br>
    OO valor de ${v1}³ é ${v1**3}`)

}