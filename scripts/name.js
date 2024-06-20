"use strict";

let nextButton = document.querySelector("#next-button");
let backButton = document.querySelector("#back-button");
let nameInput = document.getElementById("name");
let aliasInput = document.getElementById("alias");

/**
 * Next button
 */
nextButton.addEventListener("click", function()
{
    if(validateFields())
    {
        localStorage.setItem("Name", nameInput.value);
        localStorage.setItem("Alias", aliasInput.value);
        window.location.href="dump.html";
    }
});

/**
 * Back button
 */
backButton.addEventListener("click", function()
{
    window.location.href="species.html";
});

/**
 * Function called onUpdate() for the name input field. This function does the
 * work to update the alias input field too.
 */
function updateName()
{
    console.log(nameInput.value);
    console.log(aliasInput.value);
    if(aliasInput.value.length === 0 || !nameInput.value.startsWith((aliasInput.value)))
    {
        aliasInput.value = nameInput.value.substring(0, 20);
    }
    validateConfirmButton();
}

/**
 * Function called by the alias input field onUpdate() for more responsiveness.
 */
function updateAlias()
{
    validateConfirmButton();
}

/**
 * Function to activate the confirmation button if there is both an alias and
 * a name entered. Or to deactivate the button when either field is empty.
 */
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

/**
 * Function for future use to validate user input.
 * @returns {boolean}
 */
function validateFields()
{
    return true;
}