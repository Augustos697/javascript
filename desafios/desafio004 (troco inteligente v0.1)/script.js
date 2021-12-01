function comprar(){
    let produto = window.prompt("Qual produto você vai comprar ?")
    let preço = Number(window.prompt("Quanto custa"))
    let money = Number(window.prompt("Com quanto vai pagar ?"))

    window.alert(`Voce comprou um ${produto} que custou R$${preço}. Deu R$${money} em dinheiro e vai receber R$${money-preço} de troco.
    Volte sempre `)
}