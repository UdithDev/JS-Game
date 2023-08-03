const playBoard = document.querySelector(".play-board");
let foodX, foodY;

const changeFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFood();
initGame();