const form = document.querySelector("form")
const  amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount(quantia) para receber somento números
amount.addEventListener("input", (event)=>{
    
    hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
    console.log(amount.value)
})

// capturando o evento de submit(enviar) do formulário
form.onsubmit = (event)=>{
    event.preventDefault() // não ficar acontecendo o reconect da página

    console.log(currency.value)
}