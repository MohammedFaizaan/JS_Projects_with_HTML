let setRange = 10;
let a = Math.floor(Math.random() * `${setRange}`) + 1;
let b = Math.floor(Math.random() * `${setRange}`) + 1;
let systemAnswer = a + b;
console.log(a + b);
document.getElementById("display").innerHTML = `${a} + ${b} = ?`;

document.getElementById("oneDigit").addEventListener("click", ()=>{
  setRange = 10;
})

document.getElementById("twoDigit").addEventListener("click", ()=>{
  setRange = 100;
})

let Btn = document.getElementById("applyBtn");
Btn.addEventListener("click", () => {
let userResult = Number(document.getElementById("textAnswer").value);
  if (systemAnswer == userResult) {
    alert("correct");
    document.getElementById("display").innerHTML = `${a} + ${b} = ${userResult} ✔`;
  } else {
    alert("Wrong");
    document.getElementById("display").innerHTML = `${a} + ${b} = ${userResult} ❌`;
  }
});

let resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", ()=>{
  a = Math.floor(Math.random() * `${setRange}` + 1);
  b = Math.floor(Math.random() * `${setRange}` + 1);
  console.log(a+b);
  systemAnswer = a+b;
  document.getElementById("display").innerHTML = (`${a} + ${b} = ?`);
})
