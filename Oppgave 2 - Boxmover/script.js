const gameContainer = document.getElementById("game-container");
const movable = document.getElementById("movable");

let isDragging = false;


let rect = movable.getBoundingClientRect();
let containerRect = gameContainer.getBoundingClientRect();
let posLeft = rect.left - containerRect.left;
let posTop = rect.top - containerRect.top;


movable.addEventListener("mousedown", () => {
    isDragging = !isDragging;

    if (isDragging) {
        gameContainer.addEventListener("mousemove", moveObject);
    } else {
        gameContainer.removeEventListener("mousemove", moveObject);
    }
});


document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        posLeft = Math.max(0, posLeft - 10);
    } else if (event.key === "ArrowRight") {
        posLeft = Math.min(gameContainer.clientWidth - movable.offsetWidth, posLeft + 10);
    } else if (event.key === "ArrowUp") {
        posTop = Math.max(0, posTop - 10);
    } else if (event.key === "ArrowDown") {
        posTop = Math.min(gameContainer.clientHeight - movable.offsetHeight, posTop + 10);
    }

   
    movable.style.left = `${posLeft}px`;
    movable.style.top = `${posTop}px`;
});


function moveObject(event) {
    const rect = gameContainer.getBoundingClientRect();
    let newX = event.clientX - rect.left - movable.offsetWidth / 2;
    let newY = event.clientY - rect.top - movable.offsetHeight / 2;

   
    newX = Math.max(0, Math.min(newX, gameContainer.clientWidth - movable.offsetWidth));
    newY = Math.max(0, Math.min(newY, gameContainer.clientHeight - movable.offsetHeight));

    posLeft = newX;
    posTop = newY;

    movable.style.left = `${posLeft}px`;
    movable.style.top = `${posTop}px`;
}


movable.addEventListener("dragstart", (event) => event.preventDefault());
