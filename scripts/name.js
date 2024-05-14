"use strict";

let nextButton = document.querySelector("#next-button");
let backButton = document.querySelector("#back-button");
let nameInput = document.getElementById("name");
let aliasInput = document.getElementById("alias");


nextButton.addEventListener("click", function()
{
    if(validateFields())
    {
        localStorage.setItem("Name", nameInput.value);
        localStorage.setItem("Alias", aliasInput.value);
        window.location.href="dump.html";
    }
});

backButton.addEventListener("click", function()
{
    window.location.href="species.html";
});

function updateName()
{
    console.log(nameInput.value);
    console.log(aliasInput.value);
    if(aliasInput.value.length === 0 || !nameInput.value.startsWith((aliasInput.value)))
    {
        aliasInput.value = nameInput.value.substring(0, 5);
    }
    validateConfirmButton();
}

function updateAlias()
{
    validateConfirmButton();
}

function validateConfirmButton()
{
    if(aliasInput.value.length === 0  || nameInput.value.length === 0)
    {
        console.log("deactivate button");
        nextButton.style.backgroundImage = 'url("images/Next_button_blank - Copy.png")';
        nextButton.style.color = "#678";
    }
    else
    {
        console.log("activate button");
        nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
        nextButton.style.color = "#000";
    }
}

function validateFields()
{
    return true;
}