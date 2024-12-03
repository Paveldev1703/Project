// Получаем элементы поля, мяча, игроков и счёта
// Få elementene på banen, ballen, spillerne og poengsummen
const gameContainer = document.getElementById("game-container");
const ball = document.getElementById("ball");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const scoreLeft = document.getElementById("score_left");
const scoreRight = document.getElementById("score_right");

const maxScore = 5; // Максимальное количество очков для победы // Maksimalt antall poeng å vinne

// Параметры игры
// Spill Alternativer
let pause = false;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballPosX = gameContainer.clientWidth / 2;
let ballPosY = gameContainer.clientHeight / 2;

let player1PosY = gameContainer.clientHeight / 2 - player1.offsetHeight / 2;
let player2PosY = gameContainer.clientHeight / 2 - player2.offsetHeight / 2;

const playerSpeed = 5;
let player1Score = 0;
let player2Score = 0;

const keys = {};

let isGameRunning = false; // Проверка, идёт ли игра (по умолчанию выключено) // Sjekke om spillet kjører (av som standard)

// Движение игроков
// Spillerens bevegelser


// Объект для отслеживания нажатых клавиш
// Objekt for å spore tastetrykk
document.addEventListener("keydown", (event) => {
    keys[event.key] = true; // Отмечаем, что клавиша нажата // Merk at tasten trykkes inn
});

// Слушатель событий отпускания клавиши
// Lytter til nøkkelutgivelseshendelser

document.addEventListener("keyup", (event) => {
    keys[event.key] = false; // Отмечаем, что клавиша отпущена // Merk at nøkkelen er sluppet
});

// Функция для движения ракеток
// Racket bevegelse funksjon
function movePlayers() {
    if (keys["w"] && player1PosY > 0) {
        player1PosY -= playerSpeed;
    }
    if (keys["s"] && player1PosY + player1.offsetHeight < gameContainer.clientHeight) {
        player1PosY += playerSpeed;
    }
    if (keys["ArrowUp"] && player2PosY > 0) {
        player2PosY -= playerSpeed;
    }
    if (keys["ArrowDown"] && player2PosY + player2.offsetHeight < gameContainer.clientHeight) {
        player2PosY += playerSpeed;
    }

    // Обновляем позиции ракеток
    // Oppdatering av posisjonene til racketene
    player1.style.top = `${player1PosY}px`;
    player2.style.top = `${player2PosY}px`;
}

// Ставим игру на паузу
// Setter spillet til pause

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        pauseGame();
    }
})

document.addEventListener("keyup", (event) => {
    
})

function pauseGame() {
   pause = !pause;
}

// Обновление движений через requestAnimationFrame
// Oppdatere bevegelser via requestAnimationFrame

function updateGame() {
    if (!pause ){
        moveBall(); // Проверяем движение мяча // Kontrollere ballens bevegelse
        movePlayers(); // Проверяем движения игроков // Sjekke bevegelsene til spillerne
    }
    
    requestAnimationFrame(updateGame); // Рекурсивно вызываем обновление // Kall oppdateringen rekursivt
}

// Запуск обновления
// Starter oppdateringen
updateGame();


// Движение мяча
// Ballens bevegelse
function moveBall() {
    if (!isGameRunning) return; // Проверяем, запущена ли игра // Sjekk om spillet kjører

    ballPosX += ballSpeedX;
    ballPosY += ballSpeedY;

    if (ballPosY <= 0 || ballPosY + ball.offsetHeight >= gameContainer.clientHeight) {
        ballSpeedY *= -1;
    }

    if (
        ballPosX <= player1.offsetLeft + player1.offsetWidth &&
        ballPosY + ball.offsetHeight >= player1PosY &&
        ballPosY <= player1PosY + player1.offsetHeight
    ) {
        ballSpeedX *= -1;
    }

    if (
        ballPosX + ball.offsetWidth >= player2.offsetLeft &&
        ballPosY + ball.offsetHeight >= player2PosY &&
        ballPosY <= player2PosY + player2.offsetHeight
    ) {
        ballSpeedX *= -1;
    }

    if (ballPosX <= 0) {
        player2Score++;
        updateScore();
        checkWinner();
        resetBall();
    }

    if (ballPosX + ball.offsetWidth >= gameContainer.clientWidth) {
        player1Score++;
        updateScore();
        checkWinner();
        resetBall();
    }

    if (player1Score === maxScore || player2Score === maxScore) {
        isGameRunning = false;
        showWinner(player1Score > player2Score ? "Player 1" : "Player 2");
    }

    ball.style.left = `${ballPosX}px`;
    ball.style.top = `${ballPosY}px`;

}

// Ограничения для ракеток
// Restriksjoner for racketer
function movePlayer1(direction) {
    if (direction === "up" && player1PosY > 0) {
        player1PosY -= playerSpeed;
    } else if (
        direction === "down" &&
        player1PosY + player1.offsetHeight < gameContainer.clientHeight
    ) {
        player1PosY += playerSpeed;
    }
    player1.style.top = `${player1PosY}px`;
}

// Сброс мяча в центр
// Kaste ballen til midten
function resetBall() {
    ballPosX = gameContainer.clientWidth / 2;
    ballPosY = gameContainer.clientHeight / 2;
    ballSpeedX *= -1;
    ballSpeedY = (Math.random() > 0.5 ? 1 : -1) * 4;
}

// Обновление счёта
// Oppdatering av konto
function updateScore() {
    scoreLeft.textContent = player1Score;
    scoreRight.textContent = player2Score;
}

// Проверка победителя
//  Vinner bekreftelse
function checkWinner() {
    if (player1Score === maxScore) {
        isGameRunning = false;
        showWinner("Player 1");
    } else if (player2Score === maxScore) {
        isGameRunning = false;
        showWinner("Player 2");
    }
}

// Показать победителя
// Vis vinner
function showWinner(winner) {
    const winnerPopup = document.createElement("div");
    winnerPopup.textContent = `${winner} wins!`;
    winnerPopup.style.position = "absolute";
    winnerPopup.style.top = "50%";
    winnerPopup.style.left = "50%";
    winnerPopup.style.transform = "translate(-50%, -50%)";
    winnerPopup.style.backgroundColor = "white";
    winnerPopup.style.color = "black";
    winnerPopup.style.padding = "20px 40px";
    winnerPopup.style.borderRadius = "10px";
    winnerPopup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    winnerPopup.style.fontSize = "24px";
    winnerPopup.style.fontWeight = "bold";

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.style.marginTop = "10px";
    restartButton.style.padding = "10px 20px";
    restartButton.style.cursor = "pointer";
    restartButton.addEventListener("click", () => {
        gameContainer.removeChild(winnerPopup);
        restartGame();
    });

    winnerPopup.appendChild(restartButton);
    gameContainer.appendChild(winnerPopup);
}

// Кнопка начала игры
// Start spill-knapp
function createStartButton() {
    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    startButton.style.position = "absolute";
    startButton.style.top = "50%";
    startButton.style.left = "50%";
    startButton.style.transform = "translate(-50%, -50%)";
    startButton.style.padding = "10px 20px";
    startButton.style.fontSize = "16px";
    startButton.style.cursor = "pointer";

    startButton.addEventListener("click", () => {
        gameContainer.removeChild(startButton);
        isGameRunning = true;
        moveBall(); // Запускаем движение мяча. // Start bevegelsen av ballen
    });

    gameContainer.appendChild(startButton);
}

// Перезапуск игры
// Starte spillet på nytt
function restartGame() {
    player1Score = 0;
    player2Score = 0;
    updateScore();
    resetBall();
    moveBall();
    isGameRunning = true;
}

// Инициализация
// Initialisering
createStartButton();
