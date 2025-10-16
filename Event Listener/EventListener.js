/*Color changer*/
const element = document.getElementById("applyButton");
const input = document.getElementById("enteredColor");
const bg = document.getElementById("bg_clr");
element.addEventListener("click", applyColor);

function applyColor() {
  const color = input.value;
  bg.style.backgroundColor = `${color}`;
}

/*Keypress Detector*/
const buttonWritten = document.getElementById("keyPressID");
buttonWritten.addEventListener("keypress", alertKeyPress);

function alertKeyPress(Event) {
  alert("⚠ Key pressed, Word typed!");
  document.getElementById(
    "Display1"
  ).innerHTML = `⚠ Key pressed, Word typed: ${Event.key}`;
}

/*Hiding Text*/
const show = document.getElementById("showText");
show.addEventListener("click", Text_Show);

const hide = document.getElementById("hideText");
hide.addEventListener("click", Text_Hide);

function Text_Show() {
  document.getElementById("textBox").style.display = "block";
}

function Text_Hide() {
  document.getElementById("textBox").style.display = "none";
}

/*Counter*/
const add_1 = document.getElementById("addBtn");
add_1.addEventListener("click", plus);
const sub_1 = document.getElementById("subBtn");
sub_1.addEventListener("click", minus);
let a = 0;

function plus() {
  let result = a + 1;
  a = result;
  document.getElementById("Display2").innerHTML = a;
}

function minus() {
  let result = a - 1;
  a = result;
  document.getElementById("Display2").innerHTML = a;
}
