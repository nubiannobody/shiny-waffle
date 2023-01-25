let points = 0;
let plusOneBtn = document.getElementById("home-increment-btn1");
let plusTwoBtn = document.getElementById("home-increment-btn2");
let plusThreeBtn = document.getElementById("home-increment-btn3");

function addOnePointHome() {
    points += 1;
    plusOneBtn.textContent = points;  
}

function addTwoPointsHome() {
    points += 2;
    plusTwoBtn.textContent = points;
}


function addThreePointsHome() {
    points += 3;
    plusThreeBtn.textContent = points;
}

addOnePointHome()
addTwoPointsHome()
addThreePointsHome()

function addOnePointGuest() {
    points += 1;
}

function addTwoPointsGuest() {
    points += 2;
}

function addThreePointsGuest() {
    points += 3;
}

addOnePointGuest()
addTwoPointsGuest()
addThreePointsGuest()