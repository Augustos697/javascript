function tabuada(){
    var num = Number(window.document.getElementById("fnum").value)
    let res = window.document.getElementById("res")
    res.innerHTML += (`<h2>Tabuada de ${num}</h2>`)
    for ( var c = 1; c < 10; c++ ){
        
        res.innerHTML += (`${num} x ${c} =<strong> ${num*c}</strong> <br>`)
        
    }
}
function limpar(){
    let res = window.document.getElementById("res")
    res.innerHTML = null
}