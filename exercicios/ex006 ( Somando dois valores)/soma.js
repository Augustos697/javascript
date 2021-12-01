let res = window.document.getElementById("res")
var val1 = 0
var val2 = 0
function soma(){
    val1 = window.prompt("Dígite um número:")
    val2 = window.prompt("Dígite outro número:")
    v1 = Number(val1)
    v2 = Number(val2)
    res.innerHTML = (`A soma entre ${v1} e ${v2} é ${v1+v2} `)
}