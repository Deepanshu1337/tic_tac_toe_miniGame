"Use Strict";
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let game = document.querySelector(".disable");

let turn0 = true;
let winner = false;
let boxValues = new Array();
let arrLength = 0;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  let turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  game.classList.remove("hide");
  boxValues = [];
  arrLength = boxValues.length;
  console.log(arrLength);
};


// .........................................................

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
// ..........show winner and draw game functions.................
const showWinner = (winner) => {
  msg.innerText = `Congratulation Winnder is ${winner}`;
  msgContainer.classList.remove("hide");
  game.classList.add("hide");
  winner = true;

  disableBoxes();
};
const drawGame = () => {
  msg.innerText = `Oops The Game is Draw`;
  msgContainer.classList.remove("hide");
  game.classList.add("hide");

  disableBoxes();
};
// ..................................................................

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
// .....................................................................



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();

    boxValues.push("clicked");
    arrLength = boxValues.length;
    console.log(boxValues);
    console.log(arrLength);
    if (arrLength == 9 && winner == false) {
      console.log("inside loop");
      drawGame();
    }
  });
});

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
