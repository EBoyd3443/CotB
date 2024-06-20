"use strict";
let activeTheme = "none";
let nextButton = document.querySelector("#next-button");

/**
 * Next buttion
 */
nextButton.addEventListener("click", function()
{
    if(activeTheme !== "none")
    {
        localStorage.setItem("Theme", activeTheme);
        window.location.href="background.html";
    }
});

/**
 * Event listener to manage theme selection and deselection. The function also
 * pulls information from the appropriate JSON file through a fetch request.
 */
document.getElementById("sidebar").addEventListener("click",function(event)
{
    let clicked = event.target.textContent;
    let starterText =document.querySelector("#starter-text");
    let themeText = document.querySelector("#theme-text");
    //console.log(clicked);

    switch(clicked){
        case activeTheme:
            starterText.style.display = "inline-block";
            themeText.style.display = "none";
            event.target.closest("div").style.backgroundColor = "unset";
            nextButton.style.backgroundImage = 'url("images/Next_button_blank - Copy.png")';
            nextButton.style.color = "#678";
            activeTheme = "none";
            break;
        default:
            activeTheme = clicked;
            starterText.style.display = "none";
            themeText.style.display = "inline-block";
            nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
            nextButton.style.color = "#000";
            document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
            {
                console.log(element);
                element.style.backgroundColor = "unset";
            });
            event.target.closest("div").style.backgroundColor = "#888";
            fetch("./json/theme.json")
                .then(response => response.json())
                .then(data => {themeText.innerHTML = data[`${clicked}`]["Text"]});
            break;

    }
});