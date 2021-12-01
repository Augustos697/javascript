
function clicar(){
    let mes = window.prompt("Escolha um mês:")
    let res = window.document.getElementById("res")
    let estacao 
    switch(mes.toUpperCase()){// O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO' : case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estacao = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case'SETEMBRO':
            estacao = 'verão'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }
    res.innerHTML = (`No mês<strong>
        <mark> ${mes}</mark>
    </strong>, estamos na estação<strong> <mark>${estacao}</mark></strong>`)
}