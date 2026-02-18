let userScore = 0;
let compScore =0;

let result = document.querySelector("#result");
let yourDisplay = document.querySelector("#user-score");
let compDisplay = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".move")


const compChoice = ()=>{
    const arr = ["rock", "paper", "scissor"];
    const result = arr[Math.floor(Math.random()*3)];
    return result;
}

const showWinner = (userWin, userChoice, compResult)=>{
    if(userWin){
        result.innerHTML = `You Win! Your ${userChoice} beats ${compResult}`;
        userScore++;
        yourDisplay.innerHTML = userScore;
        result.style.backgroundColor = "green"
    }else{
        result.innerHTML = `You Lose. Computer ${userChoice} beats ${compResult}`;
        compScore++;
        compDisplay.innerHTML = compScore;
        result.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    const compResult = compChoice();
    if(userChoice == compResult){
        result.innerHTML = 'Game Was Draw..!';
        result.style.backgroundColor = "grey"
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compResult === "paper" ? false : true;
        }else if(userChoice == "paper"){
            userWin = compResult === "scissor" ? false : true;
        }else{
            userWin = compResult === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compResult);
    }
}


choices.forEach((choice)=>{
    console.log(choice);
    
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})