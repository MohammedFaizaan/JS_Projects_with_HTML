// color array
const Color = ["Red", "Green", "Blue", "Yellow"];
document.getElementById("arrayDisplay").innerHTML = Color;
let selectedColor = [];
let numberSelected = 0;
let runnerNumber = 0;
let runnerBackgroundclr = "";
let catcherNumber = 0;
let catcherBackgroundclr = "";
let totalScore = 50;

// random color
function randomColor() {
  let a = Math.floor(Math.random() * Color.length);
  selectedColor = Color[a];
}

// random number
function randomNumber() {
  numberSelected = Math.floor(Math.random() * 10);
}

// global score
let runner_Score = 0;
let catcher_Score = 0;
let playersChance = "Runner";

// show/hide functions
function showRunner() {
  document.getElementById("catcher_Div").style.display = "none";
  document.getElementById("runner_Div").style.display = "flex";
}

function showCatcher() {
  document.getElementById("catcher_Div").style.display = "flex";
  document.getElementById("runner_Div").style.display = "none";
}

function hideWinner(){
  document.getElementById("showWinner").style.display = "none";
}

//hide Winner
hideWinner();

//Check Score
function checkScore(){
  if(runner_Score == totalScore){
    document.getElementById("showWinner").style.display = "flex";
    document.getElementById("displayWinner").innerHTML = "Runner had won the game!";
    return;
  }
  if(catcher_Score == totalScore){
    document.getElementById("showWinner").style.display = "flex";
    document.getElementById("displayWinner").innerHTML = "Catcher had won the game!";
    return;
  }
}

//Close Score tab
document.getElementById("showWinnerDiv").addEventListener("click", ()=>{
  document.getElementById("showWinner").style.display ="none";
  resetGame();
})

//Reset Game
function resetGame(){
  document.getElementById("myBody").style.backgroundColor = "grey"; //reset background
  showRunner();
  //Runner
  runner_Score = 0;
  document.getElementById("runnerScore").innerHTML = "Your Score: " + runner_Score;
  runnerBackgroundclr = "grey"; 
  document.getElementById("runnerColor").style.backgroundColor = runnerBackgroundclr;
  runnerNumber = 0;
  document.getElementById("display1").innerHTML = "?";
  
  //Catcher
  catcher_Score = 0;
  document.getElementById("catcherScore").innerHTML = "Your Score: " + catcher_Score;
  catcherBackgroundclr = "grey";
  document.getElementById("catcherColor").style.backgroundColor = catcherBackgroundclr;
  catcherNumber = 0;
  document.getElementById("display2").innerHTML = "?";
}

// initial state
showRunner();

// runner button
document.getElementById("runnerbtn").addEventListener("click", () => {
  if (playersChance !== "Runner") return;

  randomColor();
  randomNumber();
  runnerBackgroundclr = selectedColor;
  runnerNumber = numberSelected;

  document.getElementById("myBody").style.backgroundColor = "rgba(37, 141, 230, 0.86)";
  document.getElementById("runnerColor").style.backgroundColor = runnerBackgroundclr;
  document.getElementById("display1").innerHTML = runnerNumber;
  
  runner_Score += 5;
  document.getElementById("runnerScore").innerHTML = "Your Score: " + runner_Score;
  
  console.log("Runners got: " + runnerBackgroundclr + runnerNumber);
  console.log(runner_Score);
  checkScore();
  
  playersChance = "Catcher";
  
  showCatcher();
});

// catcher button
document.getElementById("catcherbtn").addEventListener("click", () => {
  if (playersChance !== "Catcher") return;
  
  randomColor();
  randomNumber();
  catcherBackgroundclr = selectedColor;
  catcherNumber = numberSelected;
  
  document.getElementById("myBody").style.backgroundColor = "rgba(250, 27, 27, 0.79)";
  document.getElementById("catcherColor").style.backgroundColor = catcherBackgroundclr;
  document.getElementById("display2").innerHTML = catcherNumber;

  // compare logic
  if (catcherNumber === runnerNumber) {
    catcher_Score += 10;
  } 
  else if(catcherBackgroundclr === runnerBackgroundclr){
    catcher_Score += 10;
  }
  else if (catcherBackgroundclr === runnerBackgroundclr && catcherNumber === runnerNumber) {
    catcher_Score += 20;
  }

  document.getElementById("catcherScore").innerHTML = "Your Score: " + catcher_Score;

  console.log("Catcher got: " + catcherBackgroundclr + catcherNumber);
  console.log(catcher_Score);
  checkScore();

  playersChance = "Runner";
  showRunner();
});
