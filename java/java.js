function revelar(){
    const end =document.querySelector("#endereco")
    const num =document.querySelector("#numero")
    const name =document.querySelector("#nome")
    let sect = document.querySelector("section")
    let botao = document.querySelector("button")

    let novoP = document.createElement("p")
    novoP.classList.add("paragrafo")
    let texto = document.createTextNode(`Ola ${nome.value} seu pedido sera entregue na Rua ${endereco.value} n°${numero.value} em um tempo medio de uma hora.`)
    novoP.appendChild(texto)
    sect.appendChild(novoP)
    
    botao.addEventListener("click", revelar())
    

}