let points = 0;
let homePlusOneBtn = document.getElementById("home-increment-btn1");
let homePlusTwoBtn = document.getElementById("home-increment-btn2");
let homePlusThreeBtn = document.getElementById("home-increment-btn3");

let guestPlusOneBtn = document.getElementById("guest-increment-btn1");
let guestPlusTwoBtn = document.getElementById("guest-increment-btn2");
let guestPlusThreeBtn = document.getElementById("guest-increment-btn3");


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
    guestPlusOneBtn.textContent = points;
}

function addTwoPointsGuest() {
    points += 2;
    guestPlusTwoBtn.textContent = points;
}

function addThreePointsGuest() {
    points += 3;
    guestPlusThreeBtn.textContent = points;
}

addOnePointGuest()
addTwoPointsGuest()
addThreePointsGuest()