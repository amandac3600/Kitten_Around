function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.volume = 0.1
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.setAttribute("muted", "true");
  this.sound.style.display = "none";
  document.getElementById("sounds").appendChild(this.sound);

  this.play = function(){
    this.sound.play();
  }

  this.stop = function(){
    this.sound.pause();
  }
}


module.exports = Sound;
