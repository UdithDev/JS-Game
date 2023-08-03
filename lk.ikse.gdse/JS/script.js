const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let directionX=0;
let directionY=0;

const changeFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    console.log(e);

    if (e.key === "ArrowUp") {
        directionX = 0;
        directionY = -1;
    } else if (e.key === "ArrowDown") {
        directionX = 0;
        directionY = 1;
    } else if (e.key === "ArrowLeft") {
        directionX = -1;
        directionY = 0;
    } else if (e.key === "ArrowRight") {
        directionX = 1;
        directionY = 0;
    }

}


const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;

    if(snakeX===foodX && snakeY==foodY){
        changeFood();
    }
    snakeX +=directionX;
    snakeY +=directionY;

    htmlMarkup += `<div class="head" style="grid-area: ${snakeY}/${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFood();
setInterval(initGame,125);
document.addEventListener("keydown", changeDirection);