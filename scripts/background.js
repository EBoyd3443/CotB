"use strict";
let activeBackground = "none";
let nextButton = document.querySelector("#next-button");
let backButton = document.querySelector("#back-button");

/**
 * Next button
 */
nextButton.addEventListener("click", function()
{
    if(activeBackground !== "none")
    {
        localStorage.setItem("Background", activeBackground);
        window.location.href="species.html";
    }
});

/**
 * Back button
 */
backButton.addEventListener("click", function()
{
    window.location.href="theme.html";
});

/**
 * Event listener to handle selection and deselection of a Player's background.
 * The function also requests information with fetch to display on the page.
 */
document.getElementById("sidebar").addEventListener("click",function(event)
{
    let clicked = event.target.textContent;
    let starterText =document.querySelector("#starter-text");
    let backgroundText = document.querySelector("#background-text");
    switch(clicked){
        case activeBackground:
            starterText.style.display = "inline";
            backgroundText.style.display = "none";
            event.target.closest("div").style.backgroundColor = "";
            nextButton.style.backgroundImage = 'url("images/Next_button_blank - Copy.png")';
            nextButton.style.color = "#678";
            activeBackground = "none";
            break;
        default:
            //define text regions
            let bg_name = document.querySelector("#name");
            let bg_description = document.querySelector("#description");
            let bg_willpower = document.querySelector("#willpower");
            let bg_blood = document.querySelector("#blood");
            let bg_instinct = document.querySelector("#instinct");
            let bg_evasion = document.querySelector("#evasion");
            let bg_occult = document.querySelector("#occult");
            let bg_skill = document.querySelector("#skill");

            activeBackground = clicked;
            starterText.style.display = "none";
            backgroundText.style.display = "inline-block";
            nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
            nextButton.style.color = "#000";
            document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
            {
                element.style.backgroundColor = "";
            });
            event.target.closest("div").style.backgroundColor = "#888";
            fetch("./json/background.json")
                .then(response => response.json())
                .then(data => {
                    bg_name.innerHTML = clicked;
                    bg_description.innerHTML = data[`${clicked}`]["Description"];
                    bg_willpower.innerHTML = data[`${clicked}`]["Willpower"];
                    bg_blood.innerHTML = data[`${clicked}`]["Blood"];
                    bg_instinct.innerHTML = data[`${clicked}`]["Instinct"];
                    bg_evasion.innerHTML = data[`${clicked}`]["Evasion"];
                    bg_occult.innerHTML = data[`${clicked}`]["Occult Power"];
                    bg_skill.innerHTML = data[`${clicked}`]["Skill"];
                });
            break;
    }
});