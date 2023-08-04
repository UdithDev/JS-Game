const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeBody = [];
let snakeX = 5, snakeY = 10;
let directionX = 0, directionY = 0;

const changeFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    /*  console.log(e);*/

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

    //Checking if the snake eat the good
    if (snakeX === foodX && snakeY === foodY) {
        changeFood();
        snakeBody.push([foodX, foodY]); //pushing food position to snake body array
        console.log(snakeBody);
    }
    for (let i =snakeBody.length-1; i>0; i--){
        snakeBody[i] =snakeBody[i-1];
    }

    snakeBody[0]=[snakeX,snakeY];  //setting first element of snake  body to current snake position

    //Updating the snakes head position based on the current velocity
    snakeX += directionX;
    snakeY += directionY;

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    }
    playBoard.innerHTML = htmlMarkup;
}
changeFood();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);