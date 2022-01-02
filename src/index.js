const Player = require("./player.js");
const Border = require("./border.js");


window.onload = function() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let player = new Player(100, 500);
  let gameLoop = setInterval(step, 30);  //30 fps

  player.setupInputs();

  let borders = [];
  for(let i = 0; i < 6; i++) {
    borders.push(new Border(100*i, 620, 100, 100, 1));
  }
  borders.push(new Border(600, 520, 100, 25, 2));


  function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  //clear the canvas before redrawing

    player.draw(ctx);   //redraw the player at the new pos

    borders.forEach(border => {
      border.draw(ctx);
    })
  }

  function step() {  //main step function for things other than the player (like the mice)
    player.step();
    draw();     //redraw canvas once everything has been updated
  }

  // function setupInputs() {
  //   document.addEventListener("keydown", function(event) {
  //     if (event.key === "w" || event.key === "ArrowUp") {
  //       upKey = true;
  //     } else if (event.key === "a" || event.key === "ArrowLeft") {
  //       leftKey = true;
  //     } else if (event.key === "s" || event.key === "ArrowDown") {
  //       leftKey = true;
  //     } else if (event.key === "d" || event.key === "ArrowRight") {
  //       leftKey = true;
  //     }
  //   });
  //   document.addEventListener("keyup", function(event) {
  //     if (event.key === "w" || event.key === "ArrowUp") {
  //       upKey = false;
  //     } else if (event.key === "a" || event.key === "ArrowLeft") {
  //       leftKey = false;
  //     } else if (event.key === "s" || event.key === "ArrowDown") {
  //       leftKey = false;
  //     } else if (event.key === "d" || event.key === "ArrowRight") {
  //       leftKey = false;
  //     }
  //   });
  // }
}
