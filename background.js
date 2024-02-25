"use strict";
let activeBackground = "none";

document.getElementById("sidebar").addEventListener("click",function(event)
{
    let clicked = event.target.textContent;
    let backgroundImage = null;
    let starterText =document.querySelector("#starter-text");
    let backgroundText = document.querySelector("#background-text");
    switch(clicked){
        case activeBackground:
            starterText.style.display = "inline";
            backgroundText.style.display = "none";
            event.target.closest("div").style.backgroundColor = "";
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
/*document.getElementById("background-buttons").addEventListener("click",function(event)
{
    let clicked = event.target.textContent;

    let backgroundText = document.querySelector("#background-text");
    switch(clicked){
        case "Lore":
            fetch("./json/background.json")
                .then(response => response.json())
                .then(data => {backgroundText.innerHTML = data[`${activeBackground}`][`${clicked}`]});
            break;
        case "Abilities":
            fetch("./json/background.json")
                .then(response => response.json())
                .then(data => {backgroundText.innerHTML = data[`${activeBackground}`][`${clicked}`]});
            break;
        case "Weapons":
            fetch("./json/background.json")
                .then(response => response.json())
                .then(data => {backgroundText.innerHTML = data[`${activeBackground}`][`${clicked}`]});
            break;
        case "Revelation Seed":
            fetch("./json/background.json")
                .then(response => response.json())
                .then(data => {backgroundText.innerHTML = data[`${activeBackground}`][`${clicked}`]});
            break;
        default:
            break;
    }
});*/