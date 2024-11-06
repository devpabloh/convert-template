// Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// Obtendo elementos do formulário. [getting form elements]
const form = document.querySelector("form")
const  amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector(" main footer")

// Manipulando o input amount(quantia) para receber somento números [manipulating the input amount to receive only numbers]
amount.addEventListener("input", (event)=>{
    
    hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
    console.log(amount.value)
})

// capturando o evento de submit(enviar) do formulário [capturing the form submit event]

form.onsubmit = (event)=>{
    event.preventDefault() // não ficar acontecendo o reconect da página

    switch(currency.value){
        case "USD":
            convertCurrecy(amount.value, USD, "US$" )
            break;
        case "EUR":
            convertCurrecy(amount.value, EUR, "€" )
            break;
        case "GBP":
            convertCurrecy(amount.value, GBP, "£")
            break;
    }
}

// função para converter a moeda. [function to convert currency]
function convertCurrecy(amount, price,symbol){
    try{
        //aplica a classe que exibe o footer. [applies the class that displays the footer]
        footer.classList.add("show-result")
    }catch(error){
        //remove a classe do footer, ocultando ele da tela [removes the footer class, hiding it from the screen]
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}
