val0 = 0
val1 = 0
let res = window.document.getElementById("res")
function clicar(){
    val0 = Number(window.prompt('Digite um número:'))
    val1 = Number(window.prompt('Digite outro número:'))
    if(val0 > val1){
        res.innerHTML = (`Analisando os valores ${val0} e ${val1}, o maior valor é ${val0}`)
    } else if(val1 > val0 ){
        res.innerHTML =  (`Analisando os valores ${val0} e ${val1}, o maior valor é ${val1}`)
    } else{
        res.innerHTML =  (`Analisando os valores ${val0} e ${val1}, ambos o são <strong>IGUAIS</strong>`)
    }
}