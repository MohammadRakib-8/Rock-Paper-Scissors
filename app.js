let modeChangeButton=document.querySelector("#modeChangeButton");
let body=document.querySelector("body");
let choices=document.querySelector(".choices");
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