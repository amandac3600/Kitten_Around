function Mouse(x, y) {
  this.x = x;
  this.y = y;
  this.xvel = 0;
  this.yvel = 0;
  this.image = new Image();
  this.image.src = `./images/back_mouse.png`;
  this.width = 70;
  this.height = 35;

  this.step = function(num) {
    this.x += num;
  }

  this.x += this.xvel;
  this.y += this.yvel;

  this.draw = function(ctx) {
    if (this.xvel > 0) this.image.src = `./images/mouse.png`;
    else if (this.xvel < 0) this.image.src = `./images/back_mouse.png`;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
module.exports = Mouse;
