var val0 = 0
var val1 = 0
let nome = ''
let res = window.document.getElementById("res")
function calcular(){
    nome = window.prompt('Qual o nome do aluno:')
    val0 = window.prompt("Qual foi a primeira nota?")
    val1 = window.prompt("Qual foi a outra nota? ")
    v0 = Number(val0)
    v1 = Number(val1)
    res.innerHTML = (`Calculando a média final de ${nome} <br> As notas obtidas foram foram ${val0} e ${val1} <br> e a média final será de ${(v0+v1)/2} `)
    if((v0+v1)/2 > 6 || (v0+v1)/2 == 6){
        res.innerHTML += ("PARABÉNS!você passou")       
    }else{
        res.innerHTML += ("Você não passou, precisa estudar mais")
    }
}
