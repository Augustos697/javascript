function clicar(){
    let res = window.document.getElementById("res")
    var c = 1

    while(c <= 10){
        if(c%2 == 0){
            res.innerHTML += (`<mark><strong>${c} </strong></mark>&#x1F449;`)
            c++
        } else {
        res.innerHTML += (`${c} &#x1F449;`)
        c++
        }
    }
    res.innerHTML += `&#x1F3C1; <br>`
}