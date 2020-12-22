 /* jshint esversion: 6 */ 
import { update as updateSnake,draw as drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED }  from './snake.js';
import { update as updateFood,draw as drawFood }  from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')


function main(currentTime){
    if (gameOver){
        return alert('YOU LOSE');
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/ 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED ) return;
    console.log('Render');
    lastRenderTime = currentTime;
    update();
    draw();
    console.log(getSnakeHead());

}

window.requestAnimationFrame(main);
function update(){
    updateSnake();
    updateFood();
    checkDeath();


}
function draw(){
    gameBoard.innerHTML ='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}