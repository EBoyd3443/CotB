window.onload = () =>
{
    const testArea = document.querySelector("div");
    testArea.onclick = (event) =>
    {
        if(event.target.classlist.contains("button"))
        {
            createButton(testArea);
        }
    };
};

function createButton(testArea)
{
    
}