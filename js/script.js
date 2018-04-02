"use strict";
var btnWindowChangeType = document.querySelector(".button-search");

var form = document.querySelector(".searching-form");

var arrival = form.querySelector("[name=arrival-date]");

btnWindowChangeType.addEventListener("click", function (evt) {
  evt.preventDefault();  
  form.classList.toggle("searching-form-change");
  arrival.focus();
});                                 