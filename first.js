function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const choice = ["rock","paper","scissors"];
let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let reset = document.querySelector("#reset");
let restart = document.querySelector("#restart");
let msg = document.querySelector("#msg");
let msgContent = document.querySelector(".msg-content");
let resetContent = document.querySelector(".reset-content");
let comp = document.querySelector("#computer");
let player = document.querySelector("#player");
let playercount = 0;
let compcount = 0;
let line = document.querySelector("#line");
let gameHasEnded = false;


paper.addEventListener("click",()=>{
    if(gameHasEnded==false){
        if(choice[getRandomInt(3)]==="rock"){
            // console.log("win");
            playercount++;
            line.innerText = "Paper beats rock";
            line.style.color = "#AAFF00";
        }else if(choice[getRandomInt(3)]==="scissors"){
            // console.log("loss");
            compcount++;
            line.innerText = "Scissors beats paper";
            line.style.color = "#ff4500";
        }else{
            // console.log("draw");
            line.innerText = "Draw";
            line.style.color = "#FFFF00";
        }
        player.innerText = `Player: ${playercount}`;
        comp.innerText = `Computer: ${compcount}`;
        checkWinner();
    }
});
 

rock.addEventListener("click",()=>{
    if(gameHasEnded==false){
        if(choice[getRandomInt(3)]==="rock"){
            // console.log("draw");
            line.innerText = "Draw";
            line.style.color = "#FFFF00";
        }else if(choice[getRandomInt(3)]==="scissors"){
            // console.log("win");
            playercount++;
            line.innerText = "Rock beats scissors";
            line.style.color = "#AAFF00";
        }else{
            // console.log("loss");
            compcount++;
            line.innerText = "Paper beats rock";
            line.style.color = "#ff4500";
        }
        player.innerText = `Player: ${playercount}`;
        comp.innerText = `Computer: ${compcount}`;
        checkWinner();
    }
});


scissors.addEventListener("click",()=>{
    if(gameHasEnded==false){
        if(choice[getRandomInt(3)]==="rock"){
            // console.log("loss");
            compcount++;
            line.innerText = "Rock beats scissors";
            line.style.color = "#ff4500";
        }else if(choice[getRandomInt(3)]==="scissors"){
            // console.log("draw");
            line.innerText = "Draw";
            line.style.color = "#FFFF00";
        }else{
            // console.log("win");
            playercount++;
            line.innerText = "Scissors beats paper";
            line.style.color = "#AAFF00";
        }
        player.innerText = `Player: ${playercount}`;
        comp.innerText = `Computer: ${compcount}`;
        checkWinner();
    }
});

const checkWinner = ()=>{
    console.log(playercount);
    console.log(compcount);
    if(playercount==3){
        msg.innerText = "Winner is You";
        msgContent.classList.remove("hide");
        resetContent.classList.add("hide2");
        gameHasEnded = true;
    }
    if(compcount==3){
        msg.innerText = "Winner is Computer";
        msgContent.classList.remove("hide");
        resetContent.classList.add("hide2");
        gameHasEnded = true;
    }
    
}


reset.addEventListener("click",()=>{
    compcount=0;
    playercount=0;
    gameHasEnded = false;
    player.innerText = `Player: ${playercount}`;
    comp.innerText = `Computer: ${compcount}`;
    line.innerText="Choose any one option";
    msgContent.classList.add("hide");
    resetContent.classList.remove("hide2");
});

restart.addEventListener("click",()=>{
    compcount=0;
    playercount=0;
    gameHasEnded=false;
    player.innerText = `Player: ${playercount}`;
    comp.innerText = `Computer: ${compcount}`;
    line.innerText="Choose any one option";
    msgContent.classList.add("hide");
    resetContent.classList.remove("hide2");
});