function clicar(){
    let res = window.document.getElementById("res")
    var c = 10
    while(c != 0){
        res.innerHTML += (`${c} &#x1F449;`)
        c -= 1
    }
    res.innerHTML += `&#x1F3C1; <br>`
}