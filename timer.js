function showCountdown(countSeconds)
{  
   var countStatus = new Date(1000 * countSeconds).toISOString().substr(11, 8);
   document.getElementById('output').innerHTML = "Time Left: " + countStatus;
}
var count = 300;

function countdown() {
  
  if (count === 0) {
     return;
  }
  count--;
  setTimeout(countdown, 1000);
  showCountdown(count);
  
};

countdown();