let modeChangeButton=document.querySelector("#modeChangeButton");
let body=document.querySelector("body");
let choices=document.querySelector(".choices");
let choiceRPS=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let compScore=0;
let userScore=0;
let compScoreDisplay=document.querySelector("#user-score");
let userScoreDisplay=document.querySelector("#comp-score");




let currentMode="Light";

modeChangeButton.addEventListener("click",function(){

if(currentMode=="Dark"){
    console.log("Dark Mode");
   
    body.style.backgroundColor="white"
    body.style.color="black"
    modeChangeButton.innerText="Dark Mode Status : OFF"
    currentMode="Light";
}
else{
    console.log("Light Mode");
    body.style.backgroundColor="black"
    body.style.color="white"
    choices.style.backgroundColor="white"
    modeChangeButton.innerText="Dark Mode Status : ON"
    currentMode="Dark";

}
});

choiceRPS.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        printGameCalculation(userChoice);
        
    });
});

const genCompChoice= () => {
let optionC=["rock","paper","scissors"];
const randomID=Math.floor(Math.random()*3);
return optionC[randomID];
};
    
const printGameCalculation=(userChoice)=>{
        let compChoice= genCompChoice();
        console.log("User choice = ",userChoice);
        console.log("Computer Choice = ",compChoice);

        if(compChoice==userChoice){
           drawGame();

        }
        else{
            let userWin =true;
            if(userChoice=="rock"){
                userWin=compChoice=="scissors"?true:false;}
            
            else if(userChoice=="paper"){
                userWin=compChoice=="rock"?true:false;
            }
            else if(userChoice=="scissors"){
                userWin=compChoice=="rock"?false:true;
            }
                printWinnner(userWin,userChoice,compChoice);
        }};

drawGame=()=>{
    console.log("Game Draw .");
    msg.innerText="Game Draw.";
    msg.style.backgroundColor="#FFDA76";
};
        
        const printWinnner=(userWin,userChoice,compChoice)=>{

            if(userWin==true){
                userScore++;
                console.log("You Win ! ");
                msg.innerText=`You Win ! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor="green";
                userScoreDisplay.innerText=userScore;
                


            }
            else{
                compScore++;
                console.log("Computer Win ! ");
                msg.innerText=`You lost.${compChoice} beats your ${userChoice}`;
                msg.style.backgroundColor="red";
                compScoreDisplay.innerText=compScore;
            }};
    

   
   
   
   
   
   
   
   
   





    

