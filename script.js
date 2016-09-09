// global variables
var secondsRemaining;
var intervalHandle;

function resetPage(){
    document.getElementById("inputArea").style.display = "block";
}
function tick () {
  // grab h1
  var timeDisplay = document.getElementById("time");
  // turn seconds into mm:ss
  var min = Math.floor(secondsRemainig / 60);

  var sec = secondsRemainig - (min * 60);

  //add a leading zero (as a string) if seconds less than 10
  if (sec < 10){
    sec = "0" + sec;
  }
  // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
  //subtract from seconds remaining
  secondsRemainig--;
}

function startCountdown() {
  // get contents of minutes in text box
  var minutes = document.getElementById('minutes').value;
  // check if not a number
  if (isNaN(minutes)) {
    alert("Enter a Number");
    return;
  }
  // how many seconds
  secondsRemainig = minutes * 60;
  //call the tick function
  intervalHandle = setInterval(tick,1000);
  // hide the form
  document.getElementById('inputArea').style.display = "none";
}

window.onload = function() {
  //create input text box and give it an id of minutes
var inputMinutes = document.createElement('input');
inputMinutes.setAttribute("id", "minutes");

inputMinutes.setAttribute("type", "text");
//create a button
var startButton = document.createElement("input");
startButton.setAttribute("type", "button");
startButton.setAttribute("value", "Start Countdown");
startButton.onclick = function (){
    startCountdown();
};
// add the DOM to call the div in the "inputArea"
document.getElementById('inputArea').appendChild(inputMinutes);
document.getElementById('inputArea').appendChild(startButton);
};

