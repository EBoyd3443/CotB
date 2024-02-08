"use strict";
let activeSpecies = "Sapien";
document.getElementById("topbar").addEventListener("click", function()
{
    let starterText =document.querySelector("#starter-text");
    let speciesImage = document.querySelector("#species-image");
    let speciesText = document.querySelector("#species-text");
    let speciesButtons = document.querySelector("#species-buttons");

    starterText.style.display = "inline";
    speciesImage.style.display = "none";
    speciesText.style.display = "none";
    speciesButtons.style.display = "none";
});
document.getElementById("sidebar").addEventListener("click",function(event)
{
   let clicked = event.target.textContent;
   let starterText =document.querySelector("#starter-text");
   let speciesImage = document.querySelector("#species-image");
   let speciesText = document.querySelector("#species-text");
   let speciesButtons = document.querySelector("#species-buttons");
   switch(clicked){
       case "Sapien":
           activeSpecies = clicked;
           speciesImage.src = 'images/Sapien.png';
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Rajahn":
           activeSpecies = clicked;
           speciesImage.src = "images/Rajahn.png";
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Drak'an":
           activeSpecies = clicked;
           //Drak'an Image Missing.
           speciesImage.src = "images/Drak'ul.png";
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Drak'ul":
           activeSpecies = clicked;
           speciesImage.src = "images/Drak'ul.png";
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Oracca":
           activeSpecies = clicked;
           speciesImage.src = 'images/Oracca.png';
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Luminoth":
           activeSpecies = clicked;
           speciesImage.src = 'images/mothfin.png';
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Sareesh":
           activeSpecies = clicked;
           speciesImage.src = "images/Sareesh clear.png";
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       case "Beastborn":
           activeSpecies = clicked;
           speciesImage.src = "images/dogtrio.png";
           starterText.style.display = "none";
           speciesImage.style.display = "inline-block";
           speciesText.style.display = "inline-block";
           speciesButtons.style.display = "inline";
           fetch("./json/species.json")
               .then(response => response.json())
               .then(data => {speciesText.innerHTML = data[`${clicked}`]["Lore"]});
           break;
       default:
           break;
   }
});
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