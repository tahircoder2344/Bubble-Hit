let FullName = prompt("Write your good name to proceed :") 
let nextMsg = alert("Let's see how much score can you make in a minute!") 


var timer = 60;
var score = 0;
var hitInc = "";

//for score to increase on every hit:
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
//for making bubbles:
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 161; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
//for making hit:
function getNewHit() {
  hitInc = Math.floor(Math.random() * 5);
  document.querySelector("#hitVal").textContent = hitInc;
}
//for timer to run:
function runtimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over! ${FullName}, Refresh the page to play agian...</h1>`

    }
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitInc) {
    increaseScore();
    runtimer();
    makeBubble();
    getNewHit()
  }
});

//function calling:
getNewHit();
runtimer();
makeBubble();
