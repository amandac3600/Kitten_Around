function Mouse(x, y) {
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = `./images/back_mouse.png`;
  this.width = 70;
  this.height = 35;

  this.step = function() {
    this.x -= 5;
  }

  this.draw = function(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
module.exports = Mouse;
