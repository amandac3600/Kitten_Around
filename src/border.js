function Border(x, y, width, height, type) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.type = type;
  this.image = new Image();

  this.draw = function(ctx) {
    if (this.type === "water") {
      this.image.src = `./images/water.png`;
    } else if (this.type === "log") {
      this.image.src = `./images/log.png`;
    } else if (this.type === "fish") {
      this.image.src = `./images/fish.png`;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

module.exports = Border;
