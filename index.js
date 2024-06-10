let UserScore = 0;
let MachineScore = 0;

// return node list
const options = document.querySelectorAll(".option");
// use querySelector to select a single element.
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score")
const machineScoreUpdate = document.querySelector("#Machine-score")

options.forEach((option) => {
  // console.log(option);
  option.addEventListener("click", () => {
    const useroption = option.getAttribute("id");
    // console.log("option was clicked", useroption);
    MachineEngine(useroption);
  });
});
// user option
const MachineEngine = (useroption) => {
//   console.log("user Alternative =", useroption);
  // displaying machine option
  const MachineOption = GenMachineOption();
//   console.log("Machine Alternative =", MachineOption);

  if (useroption === MachineOption) {
    //gametie
    gameTie();
  } else {
    let userWin = true;
    if (useroption === "rock") {
      // terenary operator
      userWin = MachineOption === "paper" ? false : true;
    } else if (useroption === "paper") {
      userWin = MachineOption === "scissor" ? false : true;
    } else {
      userWin = MachineOption === "rock" ? false : true;
    }
    displayUerwin(userWin,useroption,MachineOption);
  }
};
// Generate machine option
const GenMachineOption = () => {
  const Alternative = ["rock", "paper", "scissor"];
  const randindex = Math.floor(Math.random() * 3);
  return Alternative[randindex];
};

const gameTie = () => {
//   console.log("Game was tie.");
  msg.innerText = "Game was Tie.play again.";
  msg.style.backgroundColor = "blue";
};

const displayUerwin = (userWin,useroption,MachineOption) => {
  if (userWin) {
    UserScore++;
    userScoreUpdate.innerText = UserScore;
    // console.log("you win ,play more.");
    msg.innerText = `You Win!  ${useroption} KnockOut ${MachineOption}`;
    msg.style.backgroundColor = "green";
  } else {
    MachineScore++;
    machineScoreUpdate.innerText = MachineScore;
    // console.log("You lose, better luck next time.");
    msg.innerText = `You lost ${MachineOption} KnockOut ${useroption}`
    msg.style.backgroundColor = "red";
  }
};
