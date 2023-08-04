const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeBody = [];
let snakeX = 5, snakeY = 10;
let directionX = 0, directionY = 0;
let gameOver = false;
let setIntervalId;

const changeFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}


const handleGameOver = () => {
    //clear the timer and reloading the page on game over
    clearInterval(setIntervalId)
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const changeDirection = (e) => {
    /*  console.log(e);*/

    if (e.key === "ArrowUp" && directionY !== 1) {
        directionX = 0;
        directionY = -1;
    } else if (e.key === "ArrowDown" && directionY !== 1) {
        directionX = 0;
        directionY = 1;
    } else if (e.key === "ArrowLeft" && directionX !== 1) {
        directionX = -1;
        directionY = 0;
    } else if (e.key === "ArrowRight" && directionX !== -1) {
        directionX = 1;
        directionY = 0;
    }

}


const initGame = () => {
    if (gameOver) return handleGameOver();

    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;

    //Checking if the snake eat the good
    if (snakeX === foodX && snakeY === foodY) {
        changeFood();
        snakeBody.push([foodX, foodY]); //pushing food position to snake body array
        console.log(snakeBody);
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];  //setting first element of snake  body to current snake position

    //Updating the snakes head position based on the current velocity
    snakeX += directionX;
    snakeY += directionY;

    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        console.log("Game Over");
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        //Adding a div for each part of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;

        if(i !==0  && snakeBody[0][1]=== snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver= true;
        }
    }
    playBoard.innerHTML = htmlMarkup;
}
changeFood();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);