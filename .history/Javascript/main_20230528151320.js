document.addEventListener("keydown", keydown(key))

function keydown(key) {
    if (event.key == 1)  {
        window.location.href = "index.html";
    } 
    else if (event.key == 2) {
        window.location.href = "traditions.html";
    }
}