document.addEventListener("keydown", down);

function down(event) {
    if (event.key == 1)  {
        window.open("index.html", "_self")
    } 
    else if (event.key == 2) {
        window.open("traditions.html", "_self")
    }
}