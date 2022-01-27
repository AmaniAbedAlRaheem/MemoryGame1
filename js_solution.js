var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

document.addEventListener("keypress", function(){
  if (!started) {
    document.querySelector("#title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


