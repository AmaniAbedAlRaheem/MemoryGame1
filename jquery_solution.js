var buttonColors = ["red", "blue", "green", "yellow"];
var Gamelevel = 0;
var gamePattern = [];
var playerClickedPattern = []; 
var started = false;


$(document).keypress(function() {

  if (!started) {

    $("#title").text("Level " + Gamelevel);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function() {

  var playerChosenColour = $(this).attr("id");
  playerClickedPattern.push(playerChosenColour);


  playSound(playerChosenColour);


  animatePressed(playerChosenColour);

  RightorWrongStep(playerClickedPattern.length-1);
});




function RightorWrongStep(currentLevel) {

    if (gamePattern[currentLevel] === playerClickedPattern[currentLevel]) {
      if (playerClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 100);
      }
    } else {
      playSound("wrong");
      //red background
      $("body").addClass("game-over");
      $("#title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


//System sequence
function nextSequence() {

  playerClickedPattern = []; 
  Gamelevel++; 
  $("#title").text("Level " + Gamelevel);
  var randomNumber = Math.floor(Math.random() * 4); 
  var randomChosenColour = buttonColors[randomNumber]; 
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
}



function animatePressed(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 80);
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function startOver() {
  Gamelevel = 0;
  gamePattern = [];
  started = false;
}
