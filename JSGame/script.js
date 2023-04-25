const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 20;
let speed = 2;



let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundryCheck();
    drawBlueBlob();
}

function boundryCheck() {

  //Up
  if ( y < radius) {
    y = radius;
  }
  //Down
  if ( y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  //Left
  if ( x < radius) {
    x = radius;
  }
  //Right
  if ( x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}


function inputs() {
    if(upPressed){
        y = y - speed;
    }
    if(downPressed) {
        y = y + speed;
    }
    if(leftPressed){
        x = x - speed;
    }
    if(rightPressed){
        x = x + speed;
    }
}

function drawBlueBlob(){
    ctx.fillStyle ="blue";
if(upPressed){
    ctx.fillStyle ="yellow";
}
if(leftPressed){
    ctx.fillStyle ="green";
}
if(downPressed){
    ctx.fillStyle ="pink";
}
if(rightPressed){
    ctx.fillStyle ="cyan";
}

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp)

function keyDown(event) {
    //Up
    if (event.keyCode == 38) {
        upPressed = true;
    }
    //Down
    if (event.keyCode == 40) {
        downPressed = true;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = true;
    }
    //Right
    if (event.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUp(event) {
    //Up
    if (event.keyCode == 38) {
        upPressed = false;
    }
    //Down
    if (event.keyCode == 40) {
        downPressed = false;
    }
    //left
    if (event.keyCode == 37) {
        leftPressed = false;
    }
    //Right
    if (event.keyCode == 39) {
        rightPressed = false;
    }
}

drawGame();