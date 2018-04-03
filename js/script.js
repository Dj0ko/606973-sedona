"use strict";

var btnWindowChangeType = document.querySelector(".button-search");

var popup = document.querySelector(".modal");

var form = popup.querySelector("form");

var arrival = popup.querySelector("[name=arrival-date]");

var departure = popup.querySelector("[name=date-of-departure]");

var amountOfAdults = popup.querySelector("[name=amount-of-adults]");

var amountOfChildren = popup.querySelector("[name=amount-of-children]")

btnWindowChangeType.addEventListener("click", function (evt) {
    evt.preventDefault();  
    popup.classList.toggle("modal-change");
    arrival.focus();
}); 

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !amountOfAdults.value || !amountOfChildren.value) {
        evt.preventDefault();
        console.log("Необходимо заполнить все поля");
    }   
});   