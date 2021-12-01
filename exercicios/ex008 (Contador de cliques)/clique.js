var clique = 0
let res = window.document.getElementById("res")
function clicar(){
    clique ++
    res.innerHTML = `O contador está com ${clique} cliques`
}
function zerar(){
    res.innerHTML = ''
    clique = 0
}