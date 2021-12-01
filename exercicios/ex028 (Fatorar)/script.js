function fatorar(){
   var num = Number(window.document.getElementById("num").value)
   let res = window.document.getElementById("res") 

   if(num > 21){
       window.alert("O valor deve ser menor ou igual a 21")
   }else if(num <= 21){
       res.innerHTML += (`<h2>Calculando ${num}</h2>`)
       c = num
       let fat = 1
      while(c > 1){
          res.innerHTML += (`${c}x`)
          fat *= c  
          c --
      }
      res.innerHTML += `1 = <strong>${fat.toLocaleString('Pt-BR')}</strong>`
        // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
   }
}