const Player = require("./player.js");
const Border = require("./border.js");
const Mouse = require("./mouse.js");
const Sound = require("./sound.js");

let gameLoop;

window.onload = function() {
  let startscreen = document.getElementById("startscreen");
  let button = document.getElementById("button");
  function hide() {
    startscreen.style.display = "none";
    startscreen.setAttribute("id", "hidden");
  }
  //gameloop
  button.addEventListener("click", hide);
  button.addEventListener("click", startGame);

  let hiddenstart = document.getElementById("hidden");
  if (!hiddenstart) {
    createstartScreen();
  }

  //toggle mute and unmute
  let volume = document.getElementById("volume");
  volume.addEventListener("click", toggleSound);

  let newGame = document.getElementById("newgame");
  newGame.addEventListener("click", restart);
  
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let img = document.getElementById("image");

  let player = new Player(600, 200);

  //sounds and music
  let backgroundSound = new Sound("./sounds/background.mp3");
  let catSound = new Sound("./sounds/cat_pain.wav");
  let waterSound = new Sound("./sounds/water.wav");
  let mouseSound = new Sound("./sounds/mouse.mp3");
  mouseSound.sound.volume = 0.2;
  let eatingSound = new Sound("./sounds/eating.wav");
  eatingSound.sound.volume = 0.5;
  
  function startGame () {
    gameLoop = setInterval(step, 30);  //30 fps
    player.setupInputs();
    backgroundSound.playing = false;
    catSound.playing = false;
  }


  function restart() {
    gameOver();
    startGame();
  }

  let borders = [];
  borders.push(new Border(0, 620, 600, 25, "log"));
  borders.push(new Border(620, 520, 100, 25, "log"));
  borders.push(new Border(740, 420, 250, 25, "log"));
  borders.push(new Border(880, 320, 150, 25, "log"));
  borders.push(new Border(1200, 300, 150, 25, "log"));
  borders.push(new Border(1370, 220, 200, 25, "log"));
  borders.push(new Border(1800, 620, 150, 25, "log"));
  borders.push(new Border(2050, 540, 200, 25, "log"));
  borders.push(new Border(2300, 640, 150, 25, "log"));
  borders.push(new Border(2350, 440, 150, 25, "log"));
  borders.push(new Border(2600, 340, 200, 25, "log"));
  borders.push(new Border(2900, 240, 150, 25, "log"));
  borders.push(new Border(2550, 660, 150, 25, "log"));
  borders.push(new Border(2700, 600, 300, 25, "log"));
  borders.push(new Border(3050, 500, 150, 25, "log"));
  borders.push(new Border(3250, 400, 200, 25, "log"));
  borders.push(new Border(3500, 650, 400, 25, "log"));
  borders.push(new Border(-1278, 680, 1282, 100, "water"));
  borders.push(new Border(0, 680, 1282, 100, "water"));
  borders.push(new Border(1278, 680, 1282, 100, "water"));
  borders.push(new Border(2556, 680, 1350, 100, "water"));
  player.borders = borders;


  let mice = [];
  mice.push(new Mouse(600, 590));
  mice.push(new Mouse(900, 590));

  let fish = new Border(3670, 620, 100, 40, "fish");
  borders.push(fish);

  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  //clear the canvas before redrawing

    //draw background
    ctx.drawImage(img, -1280, 0);
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 1280, 0);
    ctx.drawImage(img, 2560, 0);
    ctx.drawImage(img, 3840, 0);


    if (player.xvel > 0) {
      if (player.x < 3300 && player.x > 500) {
        ctx.translate(-player.xvel - 5, 0);
      }
    } else if (player.xvel < 0) {
      if (player.x > 500 && player.x < 3000) {
        ctx.translate(-player.xvel + 5, 0);
      }
    }
    player.draw(ctx);   //redraw the player at the new pos

    borders.forEach(border => {
      border.draw(ctx);
    })
    mice.forEach(mouse => {
      mouse.draw(ctx);
    })

    fish.draw(ctx);
  }

  function step() {  //main step function for things other than the player (like the mice)    
    player.step();
    mice.forEach(mouse => {
      mouse.step();
    })

    let horizontalRect = {
      x: player.x + player.xvel,
      y: player.y,
      width: player.width,
      height: player.height
    }
    //vert collision rect
    let verticalRect = {
      x: player.x,
      y: player.y + player.yvel,
      width: player.width,
      height: player.height
    }

    draw();     //redraw canvas once everything has been updated

    if (player.x < 0) {
      player.x = 0;
    } 
  

    borders.forEach (border => {
      let borderRect = {
        x: border.x,
        y: border.y,
        width: border.width,
        height: border.height
      }
      //check collision with logs
      if(checkCollision(horizontalRect, borderRect) && border.type === "log") {
        if (player.x + player.width > borderRect.x && player.y + player.height< borderRect.y) {
          // player.x = borderRect.x - player.width;
          player.x = player.x;
        }
        
      }
      if(checkCollision(verticalRect, borderRect) && border.type === "log") {
        if (player.y - player.height + 180 < borderRect.y) {
          player.y = borderRect.y - player.height - 5;
        } 
        // else if (player.y < borderRect.y + borderRect.height) {
        //   player.y = borderRect.y - borderRect.height;
        //   // player.y = player.y;
        // }
      }  

      //check collision with water
      if(checkCollision(verticalRect, borderRect) && border.type === "water") {
        if (player.y + player.height > borderRect.y) {
          displayGameOver();
          gameOver();
          if (catSound.playing === true) {
            catSound.play();
            waterSound.sound.volume = 0.3;
            waterSound.play();
          }
        } 
      } 

      //check collision with fish
      if(checkCollision(horizontalRect, borderRect) && border.type === "fish") {
        if (player.x + player.width > borderRect.x && player.y + player.height < borderRect.y) {
          // player.x = borderRect.x - player.width;
          player.x = player.x;
          gameOver();
          displayVictoryMsg();
          if (catSound.playing === true) {
            eatingSound.play();
          }
        }
        
      }
      if(checkCollision(verticalRect, borderRect) && border.type === "fish") {
        if (player.y + player.height > borderRect.y) {
          gameOver();
          displayVictoryMsg();
          if (catSound.playing === true) {
            eatingSound.play();
          }
        } 
      }  
    });

      //check collision with mice
    mice.forEach (mouse => {
      let mouseRect = {
        x: mouse.x,
        y: mouse.y,
        width: mouse.width,
        height: mouse.height
      }
      if(checkCollision(horizontalRect, mouseRect)) {
        if (player.x + player.width > mouseRect.x && player.y + player.height < mouseRect.y) {
          displayGameOver();
          gameOver();
          if (catSound.playing === true) {
            catSound.play();
            mouseSound.play();
          }
        }
      }
      if(checkCollision(verticalRect, mouseRect)) {
        if (player.y + player.height > mouseRect.y) {
          displayGameOver();
          gameOver();
          if (catSound.playing === true) {
            catSound.play();
            mouseSound.play();
          }
        } else if (player.y < mouseRect.y + mouseRect.height) {
          displayGameOver();
          gameOver();
          if (catSound.playing === true) {
            catSound.play();
            mouseSound.play();
          }
        }
      }  
    });
  }

  function checkCollision(player, r2) {
    let crash = true;
    if (player.x >= r2.x + r2.width) {
      crash = false;
    } else if (player.x + player.width <= r2.x) {
      crash = false;
    } else if (player.y >= r2.y + r2.height) {
      crash = false;
    } else if (player.y + player.height <= r2.y) {
      crash = false;
    } 
    return crash;
  }

  function gameOver() {
    backgroundSound.stop();
    clearInterval(gameLoop);
  }

  function createstartScreen() {
    let startScreen = document.getElementById('startscreen');
    let text = document.createElement('p');
    startScreen.appendChild(text);
    text.innerHTML = 'Help Bobo get to the fish at the end of the pond! But be careful, the journey to her favorite food is filled with her enemies- water and mice!';
  }

  function createGameOver() {
    let gameOverMessage = document.createElement('form');
    let text = document.createElement('p');
    let button = document.createElement('button');
    let gg = document.getElementById("game-over");
    gg.appendChild(gameOverMessage);
    gameOverMessage.appendChild(text);
    gameOverMessage.appendChild(button);
    gameOverMessage.classList.add("ggmessage");
    gameOverMessage.setAttribute("id", "gg");
    text.innerHTML = 'You ruined Bobo\'s appetite';
    button.innerText = 'New Game';
  }

  function displayGameOver() {
    createGameOver();
    let message = document.getElementById("gg");
    message.classList.add("enable");
  }

  function createVictoryMsg() {
    let victoryMsg = document.createElement('form');
    let text = document.createElement('p');
    let button = document.createElement('button');
    let win = document.getElementById("win-msg");
    win.appendChild(victoryMsg);
    victoryMsg.appendChild(text);
    victoryMsg.appendChild(button);
    victoryMsg.classList.add("winmessage");
    victoryMsg.setAttribute("id", "win");
    text.innerHTML = 'Yay! You fed Bobo!';
    button.innerText = 'New Game';
    button.setAttribute("id", "new");
  }

  function displayVictoryMsg() {
    createVictoryMsg();
    let message = document.getElementById("win");
    message.classList.add("enable");
    // let newgame = document.getElementById('new');
    // new.addEventListener("click", restart)
  }

  function toggleSound () {
    if (backgroundSound.playing === true) {
      backgroundSound.stop();
      catSound.playing = false;
    } else {
      backgroundSound.play();
      catSound.playing = true;
    }
  }
  
}
