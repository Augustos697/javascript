let jogador = 0
let computador = 0
let res = window.document.getElementById("res")

function sortear(){
    var min = 1
    var max = 100
    let dif = max - min
    let aleatorio = Math.random()
    var palpite = 0
    computador= min + Math.trunc(dif*aleatorio)
    window.alert(`${num}`)
  
}
function clicar(){
    jogador = window.prompt("Qual seu palpite ?")
    if(jogador > computador){
        res.innerHTML += (`<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong></p>`)
    } else if(jogador < computador){
        res.innerHTML += (`<p>Você falou ${jogador}. Meu número é <strong>Maior</strong></p>`)
    }else if (jogador == computador){
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tnha sorteado o valor ${computador}</p>`
        
    }
}