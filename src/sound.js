function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.volume = 0.1
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.setAttribute("muted", "true");
  this.sound.style.display = "none";
  this.playing = true;
  // document.getElementById("sounds").appendChild(this.sound);

  this.play = function(){
    this.playing = true;
    this.sound.play();
  }

  this.stop = function(){
    this.playing = false;
    this.sound.pause();
  }
}

module.exports = Sound;
