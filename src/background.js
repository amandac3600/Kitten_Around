function Background(x, y, color, type) {
  this.x = x;
  this.y = y;
  this.width = 1280;
  this.height = 720;
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }

  this.draw = function(ctx) {
    if (this.type === 1) {
      ctx.fillStyle = "lightblue";
    } else if (this.type === 2) {
      ctx.fillStyle = "tan";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Background;
