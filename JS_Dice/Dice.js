      function diceRoll() {
        let a = Math.floor(Math.random() * 6) + 1; //Dice 1
        console.log(`Dice 1: ${a}`);
        document.getElementById("dice_one").src = `Public/Dice_${a}.png`;

        let b = Math.floor(Math.random() * 6) + 1; //Dice 2
        console.log(`Dice 2: ${b}`);
        document.getElementById("dice_two").src = `Public/Dice_${b}.png`;

        let display = a + b;
        document.getElementById("Result").innerText = `Total Moves: ${display}`;
      }