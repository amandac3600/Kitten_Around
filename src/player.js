let upKey, rightKey, downKey, leftKey;

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = `./images/resizecat.png`;
  this.xvel = 0;
  this.yvel = 0;
  this.friction = 0.6;
  this.maxVel = 4;
  this.width = 150;
  this.height = 75;
  this.active = true;
  this.jumping = false;

  this.step = function() {

    //horiz mvmt
    if (this.active) {
      if (!leftKey && !rightKey || leftKey && rightKey) {
        this.xvel *= this.friction;
      } else if (rightKey) {
        this.image.src = `./images/resizecat.png`;
        this.xvel ++;
      } else if (leftKey) {
        this.image.src = `./images/back.png`;
        this.xvel --;
      }
      this.x += this.xvel;
      this.y += this.yvel;
    }

    //vert mvmt
    if (upKey && !this.jumping) {
      // setTimeout(function() {
      //   this.yvel -= 10;
      // }, 1);
      this.yvel -= 10;
    }
    // if (downKey && this.yvel != 0) {
    //   this.yvel += 10;
    // }
    this.yvel += 4; //gravity

    //adjust vel
    if (this.xvel > this.maxVel) {
      this.xvel = this.maxVel;
    } else if (this.xvel < -this.maxVel) {
      this.xvel = -this.maxVel;
    }
    if (this.yvel > this.maxVel) {
      this.yvel = this.maxVel;
    } else if (this.yvel < -this.maxVel) {
      this.yvel = -this.maxVel;
    }
    

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


  this.draw = function(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
