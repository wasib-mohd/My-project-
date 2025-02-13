let userChoiceMsg;
let randomNumber;
let computerChoice;
let computerChoiceMsg;
let resultMsg;


  function resetScore(){
    localStorage.clear();
    score={
       win: 0,
      lost: 0,
      tie: 0,

      displayScore: function () {
        return `No. of matches Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
    },

    };
      userChoiceMsg = ""; 
      computerChoiceMsg = ""; 
      resultMsg = ""; 
      updatePage(); 
  }
let score = JSON.parse(localStorage.getItem('score')) ||{
    win: 0,
    lost: 0,
    tie: 0,
    displayScore: function(){
        return `No. of matches Won:${score.win} , Lost:${score.lost} , Tie:${score.tie}`
    }
};



if (!score.displayScore) {
    score.displayScore = function () {
        return `No. of matches Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
    };
}


  function updateLocalStorage(){
    localStorage.setItem('score' , JSON.stringify(score));
  }



  function updatePage() {
    document.querySelector("#user-move").innerText = userChoiceMsg || "";
    document.querySelector("#computer-move").innerText = computerChoiceMsg || "";
    document.querySelector("#result").innerText = resultMsg || "";
    document.querySelector("#score").innerText = score.displayScore();
  }




function playGame(userChoice){
    userChoiceMsg = `you have chosen ${userChoice}`;
    randomNumber = Math.random() * 3;

    if(randomNumber > 0 && randomNumber <=1){
        computerChoice = 'Bat';
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        computerChoice = 'Ball';

    }
    else{
        computerChoice = 'Stump';
    }
    computerChoiceMsg = `computer choice is ${computerChoice}`;


    if(userChoice === 'Bat'){
        if(computerChoice === 'Ball'){
            score.win++;
            resultMsg = 'User won';
        }
         else if(computerChoice === 'Bat'){
            score.tie++;
            resultMsg = `it's a tie`;
        }
        else{
            score.lost++;
            resultMsg = 'Computer has won';
        }
        
    }
    else if(userChoice === 'Ball'){
        if(computerChoice === 'Ball'){
            score.tie++;
            resultMsg =  `it's a tie`;
        }
        else if(computerChoice === 'Bat'){
            score.lost++;
            resultMsg = 'Computer has won';
        }
        else{
            score.win++;
            resultMsg = 'User won';
        }
    }
    else if(userChoice === 'Stump'){
        if(computerChoice === 'Stump'){
            score.tie++;
            resultMsg = `it's a tie`;
        }
        else if(computerChoice === 'Ball'){
            score.lost++;
            resultMsg = 'Computer has won';
        }
        else{
            score.win++;
            resultMsg = 'User won';
        }
    }
    updateLocalStorage();
    updatePage();
   // console.log(score);
    // alert(`${userChoiceMsg}, ${computerChoiceMsg}, 
           
        
        
    //     ${resultMsg}
        
        
    //     ${score.displayScore()}
        
        
    //     `);

}