var ano = 0
var agora = new Date
let data = ''
let res = window.document.getElementById("res")
function clicar(){
    data = agora.getFullYear()
    ano = window.prompt("Em que ano você nasceu?")
    res.innerHTML = (`Quem nasceu em ${ano} vai ter ${data - ano} em ${data}`)
}