console.log("Witam!");

let currencyElement = document.querySelector(".js-currency");
let plnElement = document.querySelector(".js-pln");
let formElement = document.querySelector(".js-form");
let outcomeElement = document.querySelector(".js-outcome");


let rateUSD = 3.78 ;
let rateEUR = 4.57;


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

    let pln = +plnElement.value;
    let currency = currencyElement.value;
    let outcome;

    switch (currency) {

        case "EUR":
            outcome = pln / rateEUR;

            break;

        case "USD":
            outcome = pln / rateUSD;

            break;

    }
    
    outcomeElement.innerHTML = `${pln.toFixed(2)} PLN = ${outcome.toFixed(2)} ${currency}`;

});