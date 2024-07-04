let pointsHome = 0
let pointsGuest = 0

function addOneHome(){
    pointsHome +=1
let addPoints = document.getElementById("homeScore")
addPoints.textContent = pointsHome
}

function addTwoHome(){
    pointsHome +=2
let addPoints = document.getElementById("homeScore")
addPoints.textContent = pointsHome
}

function addThreeHome(){
    pointsHome +=3
let addPoints = document.getElementById("homeScore")
addPoints.textContent = pointsHome
}

function addOneGuest(){
    pointsGuest +=1
let addPoints = document.getElementById("guestScore")
addPoints.textContent = pointsGuest 
}

function addTwoGuest(){
    pointsGuest +=2
let addPoints = document.getElementById("guestScore")
addPoints.textContent = pointsGuest
}

function addThreeGuest(){
    pointsGuest +=3
let addPoints = document.getElementById("guestScore")
addPoints.textContent = pointsGuest
}

function resetScore(){
    pointsGuest = 0
    pointsHome = 0
let resetScore1 = document.getElementById("guestScore")
resetScore1.textContent = pointsGuest
let resetScore2 = document.getElementById("homeScore")
resetScore2.textContent = pointsHome

}