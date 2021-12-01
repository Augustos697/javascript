function clicar(){
    let res = window.document.getElementById("res")
    var c = 1
    while(c <= 10){
        res.innerHTML += (`${c} &#x1F449;`)
        c++
    }
    res.innerHTML += `&#x1F3C1;`
}