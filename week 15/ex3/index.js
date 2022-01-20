const change = () => {
    switch (document.getElementById("back").value) {
    case "dark": document.body.style.backgroundColor = "black"; break;
    case "white": document.body.style.backgroundColor = "white";break;
    case "blue": document.body.style.backgroundColor = "blue";break;
    }
}