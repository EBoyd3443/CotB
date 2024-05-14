"use strict";
let chosenName = "none";
let chosenAlias = "none";

let nextButton = document.querySelector("#next-button");
let backButton = document.querySelector("#back-button");

nextButton.addEventListener("click", function(event)
{
    if(validateFields())
    {
        localStorage.setItem("Name", chosenName);
        localStorage.setItem("Alias", chosenAlias);
        window.location.href="dump.html";
    }
});

backButton.addEventListener("click", function(event)
{
    window.location.href="species.html";
});