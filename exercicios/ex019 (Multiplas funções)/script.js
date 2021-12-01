function calcular(){
    var val0 = window.prompt("Primeiro valor:")
    var val1 = window.prompt("Segundo valor:")
    let res = window.document.getElementById("res")
    v0 = Number(val0)
    v1 = Number(val1)
    let escolha = window.prompt(`Escolha: 
[1] - soma
[2] - Subtração
[3] - Multiplicação 
[4] - Divisão`)
    res.innerHTML = ("<h1>Calculando...<br></h1>")
    if(escolha == 1){
    
        res.innerHTML += (`${v0} + ${v1} =<strong>${v0+v1}</strong>`)
    }else if(escolha == 2){
        res.innerHTML  += (`${v0} - ${v1} =<strong>${v0-v1}</strong>`)
    }else if(escolha == 3){
        res.innerHTML  += (`${v0} x ${v1}= <strong>${v0*v1}</strong>`)
    }else if(escolha == 4){
        res.innerHTML  += (`${v0} / ${v1} =<strong>${v0/v1}</strong>`)
    }else{
        res.innerHTML =(`OPÇÃO INVÁLIDA! Você digitou ${v0} e ${v1}, mas não sei o que fazer com eles.`)
    }
    
}