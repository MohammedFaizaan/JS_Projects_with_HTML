//Global variables
let setRange = 10; //Default range
let a = Math.floor(Math.random() * `${setRange}`) + 1; //Random a value
let b = Math.floor(Math.random() * `${setRange}`) + 1; //Random b value
let systemAnswer = a + b; //Result of a and b
let setOperator = "+"; //Set default operator as '+'
let victSFX = document.getElementById("victorySound"); //setting victory audio variable
let failSFX = document.getElementById("failSound"); //setting fail audio variable

console.log("Systems answer is:" + systemAnswer);
document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`; //Display the output

//random number generator for a and b
function randomNumber() {
  a = Math.floor(Math.random() * `${setRange}`) + 1;
  b = Math.floor(Math.random() * `${setRange}`) + 1;
  if(setOperator == "+"){
    systemAnswer = a+b;
  }
  else if(setOperator == "-"){
    systemAnswer = a-b;
  }
  else if(setOperator == "*"){
    systemAnswer = a*b;
  }
  else if(setOperator == "/"){
    systemAnswer = a/b;
  }
  else{
    return;
  }
  console.log(`Systems answer is : ${systemAnswer}`);
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
}

//easy mode
document.getElementById("oneDigit").addEventListener("click", () => {
  setRange = 10;
  randomNumber();
});

//hard mode
document.getElementById("twoDigit").addEventListener("click", () => {
  setRange = 100;
  randomNumber();
});

//apply button functions
let Btn = document.getElementById("applyBtn");
Btn.addEventListener("click", () => {
  let userResult = Number(document.getElementById("textAnswer").value);
  if (systemAnswer == userResult) {
    document.getElementById(
      "display"
    ).innerHTML = `${a} ${setOperator} ${b} = ${userResult} ✔`;
    victSFX.play();
    document.getElementById("box1").style.backgroundColor = "rgba(9, 111, 11, 0.4)";
    setTimeout(() => {
      randomNumber();
      document.getElementById("box1").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }, 1500);
  } else {
    document.getElementById(
      "display"
    ).innerHTML = `${a} ${setOperator} ${b} = ${userResult} ❌ (Correct answer is: ${systemAnswer})`;
    failSFX.play();
    document.getElementById("box1").style.backgroundColor = "rgba(111, 9, 9, 0.4)";
    setTimeout(() => {
      document.getElementById("box1").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }, 1500);
  }
});

//Reset button
let resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", () => {
  randomNumber();
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
});

//Addition operator
document.getElementById("addMode").addEventListener("click", () => {
  setOperator = "+";
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
  systemAnswer = a + b;
  console.log("Operator says, Systems answer is:" + systemAnswer);
});

//Subtraction operator
document.getElementById("subMode").addEventListener("click", () => {
  setOperator = "-";
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
  systemAnswer = a - b;
  console.log("Operator says, Systems answer is:" + systemAnswer);
});

//Multiplication operator
document.getElementById("multMode").addEventListener("click", () => {
  setOperator = "*";
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
  systemAnswer = a * b;
  console.log("Operator says, Systems answer is:" + systemAnswer);
});

//Division operator
document.getElementById("divMode").addEventListener("click", () => {
  setOperator = "/";
  document.getElementById("display").innerHTML = `${a} ${setOperator} ${b} = ?`;
  systemAnswer = a / b;
  console.log("Operator says, Systems answer is:" + systemAnswer);
});
