let upKey, rightKey, downKey, leftKey;

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = `./images/sprite.png`;
  this.image.width = 1098;
  this.image.height = 1932;
  this.xvel = 0;
  this.yvel = 0;
  this.friction = 0.6;
  this.maxVel = 5;
  this.width = 130;
  this.height = 125;
  this.active = true;
  this.borders = [];

  let framex = 0;
  let framey = 0;

  this.step = function() {
    //horiz mvmt
    if (this.active) {
      if (this.xvel === 0 && !upKey) {
        framex = 0;
        framey = 0;
      }
      if (!leftKey && !rightKey || leftKey && rightKey) {
        this.xvel *= this.friction;
        this.framex = 0;
        this.framey = 0;
      } else if (rightKey && !upKey) {
        this.image.src = `./images/sprite.png`;
        if (framex < 1) framex++;
        else framex = 0;
        if (framey < 3) framey++;
        else(framey = 0);
        this.xvel ++;
      } else if (leftKey && !upKey) {
        this.image.src = `./images/spriteback.png`;
        if (framex < 1) framex++;
        else framex = 0;
        if (framey < 3) framey++;
        else(framey = 0);
        this.xvel --;
      }
      this.x += this.xvel;
      this.y += this.yvel;
    }

    //vert mvmt
    let logs = [];
    this.borders.forEach (border => {
      if (border.type === "log") logs.push(border);
    })

    logs.forEach (border => {
      let borderRect = {
        x: border.x,
        y: border.y,
        width: border.width,
        height: border.height
      }
      if (upKey && this.y + this.height === borderRect.y && (this.x + this.width/2 + 16 > borderRect.x && this.x + this.width/2 - 16 < borderRect.x + borderRect.width)) {
        framex = 1;
        framey = 2;
        this.yvel -= 22;
      } 
    } )
      

      // this.y -= 10;


    //gravity
    this.yvel += 2;

    //adjust vel
    if (this.xvel > this.maxVel) {
      this.xvel = this.maxVel;
    } else if (this.xvel < -this.maxVel) {
      this.xvel = -this.maxVel;
    }
    if (this.yvel > this.maxVel) {
      this.yvel = this.maxVel;
    } 
    // if (this.yvel < -this.maxVel) {
    //   this.yvel = -this.maxVel;
    // }
    

    if (this.xvel > 0) {
      this.xvel = Math.floor(this.xvel);
    } else {
      this.xvel = Math.ceil(this.xvel);
    }
    if (this.yvel > 0) {
      this.yvel = Math.floor(this.yvel);
    } else {
      this.yvel = Math.ceil(this.yvel);
    }

    this.x += this.xvel;
    this.y += this.yvel;
  }


  let spriteWidth = this.image.width/2;
  let spriteHeight = this.image.height/4;
  this.draw = function(ctx) {
    ctx.drawImage(this.image, framex*spriteWidth, framey*spriteHeight, spriteWidth, spriteHeight, this.x, this.y, this.width, this.height);
    //image, xcoord, ycoord, width of image, height, xcoord where to draw, ycoord, desired width of drawing,height
  }

  this.setupInputs = function() {
    document.addEventListener("keydown", function(event) {
      if (event.key === "w" || event.key === "ArrowUp") {
        event.preventDefault();
        upKey = true;
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        event.preventDefault();
        leftKey = true;
      } else if (event.key === "s" || event.key === "ArrowDown") {
        event.preventDefault();
        downKey = true;
      } else if (event.key === "d" || event.key === "ArrowRight") {
        event.preventDefault();
        rightKey = true;
      }
    });
    
    document.addEventListener("keyup", function(event) {
      if (event.key === "w" || event.key === "ArrowUp") {
        upKey = false;
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        leftKey = false;
      } else if (event.key === "s" || event.key === "ArrowDown") {
        downKey = false;
      } else if (event.key === "d" || event.key === "ArrowRight") {
        rightKey = false;
      }
    });
  }
}



module.exports = Player;
// export default Player;
