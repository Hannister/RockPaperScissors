const game = () => {
  let pScore = 0,
    cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };
  //paly match
  const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Here is where we call compare hands
          comperHands(this.textContent, computerChoice);

          // UpDate the images
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 1500);

        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
      });
    });
  };

  const endGame = () => {
    const endGameBtn = document.querySelector(".end-game button");
    const matchScreen = document.querySelector(".match");
    const newGame = document.querySelector(".game-over button");
    const endGameScreen = document.querySelector(".game-over");

    endGameBtn.addEventListener("click", () => {
      matchScreen.classList.add("fadeOut");
      endGameScreen.classList.add("fadeIn");

      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      const winner = document.querySelector(".theWinner");

      playerScore.textContent = pScore;
      computerScore.textContent = cScore;

      if (pScore > cScore) {
        winner.textContent = "YOU WIN!";
        return;
      } else {
        winner.textContent = "COMPUTER WINS";
      }
    });

    newGame.addEventListener("click", () => {
      location.reload();
    });
  };

  const upDateScore = () => {
    const endGameBtn = document.querySelector(".end-game");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore > 1 || cScore > 1) {
      return endGameBtn.classList.add("fadeIn");
    }
  };

  const comperHands = (playerChoice, computerChoice) => {
    // UpDate Text
    const winner = document.querySelector(".winner");
    //checking to score
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      winner.textContent = "Player Wins";
      pScore++;
      upDateScore();
      return;
    } else {
      winner.textContent = "Computer Wins";
      cScore++;
      upDateScore();
      return;
    }
  };

  // call all the inner function
  startGame();
  playMatch();
  endGame();
};

// start the game function
game();