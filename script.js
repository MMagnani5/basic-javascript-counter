// global variables
var secondsRemainig;
var intervalHandle;

function resetPage(){
    document.getElementById("inputArea").style.display = "block";
}
function tick () {
  // grab h1
  var timeDisplay = document.getElementsById('time');
  // turn seconds into mm:ss
  var min = Math.floor(secondsRemainig / 60);

  var sec = secondsRemainig - (min * 60);

  //add a leading zero (as a string) if seconds less than 10
  if (sec < 10){
    sec = "0" + sec;
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

