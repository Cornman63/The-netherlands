document.addEventListener("keydown", keydown(key))

function keydown(key) {
    if (event.key == 1)  {
        window.open("index.html")
    } 
    else if (event.key == 2) {
        window.open("traditions.html")
    }
}