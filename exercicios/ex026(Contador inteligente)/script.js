

function contagem(){
    let res = window.document.getElementById("res")
    var ival = Number(window.document.getElementById("inum").value)
    var fval = Number(window.document.getElementById("fnum").value)
    let  cont 
    
    if(ival < fval){
        while(ival < fval){
        cont = ival
        res.innerHTML += (`${cont} &#x1F449`)
        ival ++
        }
        res.innerHTML += ` &#x1F3C1; <br>`
    }else if(ival > fval){ 
        while(ival > fval){

        cont = ival
        res.innerHTML += (`${cont} &#x1F449`)
        ival -= 1
        }
        res.innerHTML += ` &#x1F3C1; <br>`
    } else if(ival == fval){
        res.innerHTML += (`Não é possível contar, pois os números são iguais `)
    }
    res.innerHTML += ` &#x1F3C1; <br>`
    
}