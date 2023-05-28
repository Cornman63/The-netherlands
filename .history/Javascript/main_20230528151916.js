document.addEventListener("keydown", down(event))

function down(event) {
    if (event.key == 1)  {
        window.open("index.html")
    } 
    else if (event.key == 2) {
        window.open("traditions.html")
    }
}