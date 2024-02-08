"use strict";
let activeSpecies = "Sapien";
console.log("Script loaded");
document.getElementById("sidebar").addEventListener("click",function(event)
{
   let clicked = event.target.textContent;

   let speciesImage = document.querySelector("#species-image");
   let speciesText = document.querySelector("#species-text");
   switch(clicked){
       case "Sapien":
           activeSpecies = clicked;
           speciesImage.src = 'images/Sapien.png';

           break;
       case "Rajahn":
           activeSpecies = clicked;
           speciesImage.src = "images/Rajahn.png";
           break;
       case "Drak'an":
           activeSpecies = clicked;
           //Drak'an Image Missing.
           speciesImage.src = "images/Drak'ul.png";
           break;
       case "Drak'ul":
           activeSpecies = clicked;
           speciesImage.src = "images/Drak'ul.png";
           break;
       case "Oracca":
           activeSpecies = clicked;
           speciesImage.src = 'images/Oracca.png';
           break;
       case "Luminoth":
           activeSpecies = clicked;
           speciesImage.src = 'images/mothfin.png';
           break;
       case "Sareesh":
           activeSpecies = clicked;
           speciesImage.src = "images/Sareesh clear.png";
           break;
       case "Beastborn":
           activeSpecies = clicked;
           speciesImage.src = "images/dogtrio.png";
           break;
       default:
           break;
   }
});