let home = document.getElementById("home");
let point = 0;

function homePlusOne() {
    point += 1;
    home.textContent = point;
}

homePlusOne()