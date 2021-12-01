function clicar(){
    let res = window.document.getElementById("res")
    var c = 2
    while(c <= 10){
        res.innerHTML += (`${c} &#x1F449;`)
        c += 2
    }
    res.innerHTML += `&#x1F3C1; <br>`
}