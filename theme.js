let activeTheme = "none";

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
            activeTheme = "none";
            break;
        case "Adventurous":
            activeTheme = clicked;
            starterText.style.display = "none";
            themeText.style.display = "inline-block";
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
        case "Grounded":
            activeTheme = clicked;
            starterText.style.display = "none";
            themeText.style.display = "inline-block";
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
        case "Weird":
            activeTheme = clicked;
            starterText.style.display = "none";
            themeText.style.display = "inline-block";
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
        case "Dark":
            activeTheme = clicked;
            starterText.style.display = "none";
            themeText.style.display = "inline-block";
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
        default:
            break;
    }
});