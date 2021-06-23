let roundsCount = 1, winsCount = 0;
const roundStatus = document.querySelector('.rounds');
const scoreStatus = document.querySelector('.score');

function getRandomNumb(){
  return Math.floor((Math.random() * 3) + 1);
}

function check(id) {
  let randomNumb = getRandomNumb();
  let status = document.querySelector('.status');
  if(randomNumb == id) {
    status.textContent = '!!!CONGRATS, YOU WIN!!!';
    status.style.backgroundColor = "green";
    ++winsCount;
  } else {
    status.textContent = "!!YOU LOSE!!!";
    status.style.backgroundColor = "red";
  }
  roundStatus.textContent = "Rounds: " + roundsCount;
  scoreStatus.textContent = "Wins: " + winsCount;
  ++roundsCount;
}
