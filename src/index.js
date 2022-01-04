const Player = require("./player.js");
const Border = require("./border.js");
const Mouse = require("./mouse.js");


window.onload = function() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let img = document.getElementById("image");

  let player = new Player(400, 200);
  
  let gameLoop = setInterval(step, 30);  //30 fps

  player.setupInputs();

  let borders = [];
  borders.push(new Border(0, 620, 600, 25, 2));
  borders.push(new Border(620, 520, 100, 25, 2));
  borders.push(new Border(740, 420, 300, 25, 2));
  borders.push(new Border(840, 320, 150, 25, 2));
  borders.push(new Border(1140, 320, 150, 25, 2));
  borders.push(new Border(1350, 220, 200, 25, 2));
  borders.push(new Border(1800, 620, 150, 25, 2));
  borders.push(new Border(2050, 540, 200, 25, 2));
  borders.push(new Border(2300, 640, 150, 25, 2));
  borders.push(new Border(2350, 440, 150, 25, 2));
  borders.push(new Border(2550, 700, 150, 25, 2));
  borders.push(new Border(2700, 600, 300, 25, 2));
  borders.push(new Border(3050, 500, 150, 25, 2));
  borders.push(new Border(3250, 380, 200, 25, 2));
  borders.push(new Border(3500, 650, 400, 25, 2));


  let mice = [];
  mice.push(new Mouse(600, 590));
  mice.push(new Mouse(900, 590));


  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  //clear the canvas before redrawing

    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 1280, 0);
    ctx.drawImage(img, 2560, 0);


    if (player.xvel > 0) {
      ctx.translate(-player.xvel - 5, 0);
    } else if (player.xvel < 0) {
      ctx.translate(-player.xvel + 5, 0);
    }
    player.draw(ctx);   //redraw the player at the new pos

    borders.forEach(border => {
      border.draw(ctx);
    })
    mice.forEach(mouse => {
      mouse.draw(ctx);
    })
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
      if(checkCollision(horizontalRect, borderRect)) {
        if (player.x + player.width > borderRect.x && player.y + player.height < borderRect.y) {
          // player.x = borderRect.x - player.width;
          player.x = player.x;
        }
        
      }
      if(checkCollision(verticalRect, borderRect)) {
        if (player.y + player.height > borderRect.y) {
          player.y = borderRect.y - player.height - 6;
        } 
        else if (player.y < borderRect.y + borderRect.height) {
          // player.y = borderRect.y + borderRect.height;
          player.y = player.y;
        }
              
      }  
    });

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
        }
        
        // player.x = horizontalRect.x;
        // player.xvel = 20;
      }
      if(checkCollision(verticalRect, mouseRect)) {
        if (player.y + player.height > mouseRect.y) {
          displayGameOver();
        } else if (player.y < mouseRect.y + mouseRect.height) {
          displayGameOver();
        }
        // player.y = verticalRect.y;
        // player.yvel = 20;
        
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

  function createGameOver() {
    let newCanvas = document.createElement('div');
    let gameOverMessage = document.createElement('form');
    let text = document.createElement('p');
    let button = document.createElement('button');
    gameOverMessage.appendChild(text);
    gameOverMessage.appendChild(button);
    gameOverMessage.classList.add("ggmessage");
    gameOverMessage.setAttribute("id", "gg");
    newCanvas.classList.add("ggcan");
    newCanvas.setAttribute("id", "ggcan")
    text.innerHTML = 'Game Over';
    button.innerText = 'New Game';
    // console.log(gameOverMessage);
  }

  function displayGameOver() {
    createGameOver();

    let message = document.getElementById("gg");
    let displayCanvas = document.getElementById("ggcan");
    console.log(message);
    message.classList.add("enable");
    displayCanvas.classList.add("enable");
  }

}
