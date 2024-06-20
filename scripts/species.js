"use strict";
let activeSpecies = "none";
let nextButton = document.querySelector("#next-button");
let backButton = document.querySelector("#back-button");

//Navigate to next page if a species was chosen
nextButton.addEventListener("click", function()
{
    if(activeSpecies !== "none")
    {
        localStorage.setItem("Species", activeSpecies);
        window.location.href="name.html";
    }
});

//Back button
backButton.addEventListener("click", function()
{
    window.location.href="background.html";
});

/**
 * Species button event function to fetch the appropriate information based on
 * the button clicked.
 */
document.getElementById("sidebar").addEventListener("click",function(event)
{
   let clicked = event.target.textContent;
   let speciesImage = null;
   let starterText =document.querySelector("#starter-text");
   let speciesText = document.querySelector("#species-text");
   let speciesButtons = document.querySelector("#species-buttons");
   switch(clicked){
       case activeSpecies:
           hideImages();
           starterText.style.display = "inline";
           speciesText.style.display = "none";
           speciesButtons.style.display = "none";
           event.target.closest("div").style.backgroundColor = "";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank - Copy.png")';
           nextButton.style.color = "#678";
           activeSpecies = "none";
           break;
       case "Sapien":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("sapien");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Rajahn":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("rajahn");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Drak'an":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("drakan");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Drak'ul":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("drakul");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Oracca":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("oracca");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Luminoth":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("luminoth");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Sareesh":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("sareesh");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Beastborn":
           activeSpecies = clicked;
           hideImages();
           speciesImage = document.getElementById("beastborn");
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           nextButton.style.backgroundImage = 'url("images/Next_button_blank.png")';
           nextButton.style.color = "#000";
           document.querySelector("#sidebar").querySelectorAll("div").forEach((element) =>
           {
               console.log(element);
               element.style.backgroundColor = "";
           });
           event.target.closest("div").style.backgroundColor = "#888";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       default:
           break;
   }
});

// Helper function called in Species button event to hide each image before
// retrieving a new one.
function hideImages()
{
    document.querySelectorAll(".hidden").forEach((element) =>
    {
        element.style.display="none";
    });
}

/**
 * Button event function to fetch the appropriate information about a particular
 * species.
 */
document.getElementById("species-buttons").addEventListener("click",function(event)
{
    let clicked = event.target.textContent;

    let speciesText = document.querySelector("#species-text");
    switch(clicked){
        case "Lore":
            fetch("./json/species.json")
                .then(response => response.json())
                .then(data => {speciesText.innerHTML = data[`${activeSpecies}`][`${clicked}`]});
            break;
        case "Abilities":
            fetch("./json/species.json")
                .then(response => response.json())
                .then(data => {speciesText.innerHTML = data[`${activeSpecies}`][`${clicked}`]});
            break;
        case "Weapons":
            fetch("./json/species.json")
                .then(response => response.json())
                .then(data => {speciesText.innerHTML = data[`${activeSpecies}`][`${clicked}`]});
            break;
        case "Revelation Seed":
            fetch("./json/species.json")
                .then(response => response.json())
                .then(data => {speciesText.innerHTML = data[`${activeSpecies}`][`${clicked}`]});
            break;
        default:
            break;
    }
});