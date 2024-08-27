let modeChangeButton=document.querySelector("#modeChangeButton");
let body=document.querySelector("body");
let choices=document.querySelector(".choices");
let choiceRPS=document.querySelectorAll(".choice");

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
}
    
const printGameCalculation=(userChoice)=>{
        let compChoice= genCompChoice();
        console.log("User choice = ",userChoice);
        console.log("Computer Choice = ",compChoice);

        if(compChoice==userChoice){
console.log("Game Draw");

        }
        else{
            let userWin =true;
            if(userChoice=="rock"){
                userWin=compChoice=="scissors"?true:false;
            }
            else if(userChoice=="paper"){
                userWin=compChoice=="rock"?true:false;
            }
            else if(userChoice=="scissors"){
                userWin=compChoice=="rock"?false:true;
            }
                printWinnner(userWin);
        }}


        const printWinnner=(userWin)=>{

            if(userWin==true){
                console.log("You Win ! ");
            }
            else{
                console.log("Computer Win ! ");
            }}
    

   
   
   
   
   
   
   
   
   





    

