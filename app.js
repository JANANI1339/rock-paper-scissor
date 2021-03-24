 let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice()
{
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
function convertToWord(letter)
{
    if(letter === 'r')
    return "rock";
    if(letter === 'p')
    return "paper";
    return "scissor";
}
function win(user, computer)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userword = "user".fontsize(3).sub();
    const compword = "comp".fontsize(3).sub();
    result_p.innerHtml = `${convertToWord(user) }${userword}  beats ${convertToWord(computer)}${compword} . You Win...`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {
         document.getElementById(user).classList.remove("green-glow");
    },300);
}

function lose(user,computer)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userword = "user".fontsize(3).sub();
    const compword = "comp".fontsize(3).sub();
    result_p.innerHtml = `${convertToWord(user) }${userword} loses to ${convertToWord(computer)}${compword} . You lost...`;
      document.getElementById(user).classList.add("red-glow");
    setTimeout(() =>   document.getElementById(user).classList.remove("red-glow"),300);
}

function draw(user)
{
     const userword = "user".fontsize(3).sub();
    const compword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user) }${userword} equal ${convertToWord(computer)}${compword} . It's a draw`;
      document.getElementById(user).classList.add("gray-glow");
    setTimeout(() =>  document.getElementById(user).classList.remove("gray-glow"),300);
}

function game(userChoice)
{
    const computerChoice = getComputerChoice();
    //console.log(userChoice+" "+computerChoice);
    switch(userChoice+computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener('click', function()
{
    game("r");
})

paper_div.addEventListener("click",function(){
    game("p");
})

scissor_div.addEventListener("click",function()
{
    game("s");
})
}

main();








