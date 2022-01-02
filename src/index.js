const Player = require("./player.js");
const Border = require("./border.js");


window.onload = function() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let img = document.getElementById("image");

  let player = new Player(100, 100, `./images/resizecat.png`, "image");
  
  let gameLoop = setInterval(step, 30);  //30 fps

  player.setupInputs();

  let borders = [];
  borders.push(new Border(0, 620, 600, 100, 1));
  borders.push(new Border(600, 520, 100, 50, 2));


  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  //clear the canvas before redrawing

    ctx.drawImage(img, 0, 0)
    player.draw(ctx);   //redraw the player at the new pos

    borders.forEach(border => {
      border.draw(ctx);
    })
  }

  function step() {  //main step function for things other than the player (like the mice)
    player.step();
    draw();     //redraw canvas once everything has been updated
    borders.forEach (border => {
      let borderRect = {
        x: border.x,
        y: border.y,
        width: border.width,
        height: border.height
      }
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
      if(checkCollision(horizontalRect, borderRect)) {
        // while(checkCollision(horizontalRect, borderRect)) {
        //   horizontalRect.x -= Math.sign(player.xvel);
        // }
        if (player.x + player.width > borderRect.x) {
          player.x = borderRect.x - player.width;
        }
        
        // player.x = horizontalRect.x;
        player.xvel = 0;
      }
      if(checkCollision(verticalRect, borderRect)) {
        // while(checkCollision(verticalRect, borderRect)) {
        //   verticalRect.y -= Math.sign(player.yvel);
        // }
        if (player.y + player.height > borderRect.y) {
          player.y = borderRect.y - player.height;
        }
        // player.y = verticalRect.y;
        player.yvel = 0;
        
      }  
    });
  }

  function checkCollision(player, r2) {
    let crash = true;
    console.log(player);
    console.log(r2);
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

  //horizontal collision rect
  // let horizontalRect = {
  //   x: player.x + player.xvel,
  //   y: player.y,
  //   width: player.width,
  //   height: player.height
  // }
  // //vert collision rect
  // let verticalRect = {
  //   x: player.x,
  //   y: player.y + player.yvel,
  //   width: player.width,
  //   height: player.height
  // }

  // borders.forEach (border => {
  //   let borderRect = {
  //     x: border.x,
  //     y: border.y,
  //     width: border.width,
  //     height: border.height
  //   }
  //   console.log(checkCollision(horizontalRect,borderRect));
  //   console.log(verticalRect)
  //   if(checkCollision(horizontalRect, borderRect)) {
  //     // while(checkCollision(horizontalRect, borderRect)) {
  //     //   horizontalRect.x -= Math.sign(player.xvel);
  //     // }
  //     player.x = horizontalRect.x;
  //     player.xvel = 0;
  //   }
  //   console.log(checkCollision(verticalRect,borderRect));
  //   if(checkCollision(verticalRect,borderRect)) {
  //     // while(checkCollision(verticalRect, borderRect)) {
  //     //   verticalRect.y -= Math.sign(player.yvel);
  //     // }
  //     player.y = verticalRect.y;
  //     player.yvel = 0;
  //   }
  // })

}
