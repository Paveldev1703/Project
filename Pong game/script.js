// Player 1

let topP1 = 350;
const player1 = document.getElementById("player1");

document.addEventListener("keydown", (event) => {
    if (event.key === "w" ) {
        topP1 -= 15;
        player1.style.top = topP1 + "px";
    } else if (event.key === "s") {
        topP1 += 15;
        player1.style.top = topP1 + "px";
    }
    console.log(event);
});

document.addEventListener("keyup", (event) => {
    
});
// Player 2

let topP2 = 350;
const player2 = document.getElementById("player2");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        topP2 -= 15;
        player2.style.top = topP2 + "px";
    } else if (event.key === "ArrowDown") {
        topP2 += 15;
        player2.style.top = topP2 + "px";
    }
    console.log(event);
}); 

document.addEventListener("keyup", (event) => {
    
}); 


//Score

let scoreLeft = 0;
let scoreRight = 0;

function score() {
    document.getElementById("score_left").textContent = scoreLeft;
    document.getElementById("score_right").textContent = scoreRight;
}

function addScoreLeft() {
    scoreLeft += 1;
    score();
}

function addScoreRight() {
    scoreRight += 1;
    score();
}

function resetScore() {
    scoreLeft = 0;
    scoreRight = 0;
    score();
}

// Ball

const ball = document.getElementById("ball");


function moveBall() {
    let ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));}

    let ballTop = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));

    ball.style.left = ballLeft + "px";
    ball.style.top = ballTop + "px";

    requestAnimationFrame(moveBall);

moveBall();












































