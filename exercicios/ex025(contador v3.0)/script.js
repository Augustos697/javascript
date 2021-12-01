function contagem(){
    let res = window.document.getElementById("res")
    var c = 0
    var max = Number(window.document.getElementById('fnum').value)
    res.innerHTML += `<h2>Contando de 0 até ${max}</h2>`
    while(c <= max){
        res.innerHTML += (`${c} &#x1F449;`)
        c += 1
    }
    res.innerHTML += `&#x1F3C1;`
}