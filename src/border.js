function Border(x, y, width, height, type) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.type = type;

  this.draw = function(ctx) {
    if (this.type === 1) {
      ctx.fillStyle = "lightblue";
    } else if (this.type === 2) {
      ctx.fillStyle = "tan";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Border;
