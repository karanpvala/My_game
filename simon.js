let gameSeq=[];
let userSeq=[];

let btns= ["red","yellow","green","orange"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // console.log("game is started");
    if(started == false)
    {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function useFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp()
{
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[ randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
}

function btnPress()
{
    console.log(this);
    let btn = this;
    userFlash(btn);
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}