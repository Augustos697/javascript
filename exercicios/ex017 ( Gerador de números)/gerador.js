
function gerar(){
    var min = 1
    let max = 100
    let dif = max - min
    let aleatorio =  Math.random()// Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    let res = window.document.getElementById('res')
    res.innerHTML += (`<p>Acabei de pensar no número <mark>${num}</mark></p>`)
}

function limpar(){
    res.innerHTML = null
}