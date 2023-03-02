const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetBtn = document.querySelector("#reset");
let winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false; //현재는 게임중 true인 경우에는 게임이 종료

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  document.getElementById("labelScore").innerHTML = winningScore;
  reset();
});
resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = p.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
