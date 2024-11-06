const  amount = document.getElementById("amount")

// Manipulando o input amount(quantia) para receber somento números
amount.addEventListener("input", (event)=>{
    event.preventDefault()
    hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
    console.log(amount.value)
})