var val1 = 0
var val2 = 0
var val3 = 0
let res = window.document.getElementById("res")
function calcular(){
    val1 = window.prompt("Qual foi a 1° nota do aluno:")
    val2 = window.prompt("Qual foi a 2° nota do aluno:")
    val3 = window.prompt("Qual foi a 3° nota do aluno:")
    v1 = Number(val1)
    v2 = Number(val2)
    v3 = Number(val3)
    res.innerHTML = (`As notas tiradas foram ${v1},${v2} e ${v3}.<br> A média foi de ${(v1+v2+v3)/3}`)
    
}