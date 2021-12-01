var val0 = 0
let res = window.document.getElementById("res")
function clicar(){
    val0 = window.prompt("Escolha um número:")
    v0 = Number(val0)
    if(v0%2 == 0){
        res.innerHTML = (`O número ${v0} é par`)
    } else{
        res.innerHTML = (`O número ${v0} é ímpar`)
    }
}