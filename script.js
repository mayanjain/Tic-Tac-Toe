let turn = "X";
let boxes = document.getElementsByClassName("box");
let player = document.querySelector('.player');
let reset = document.querySelector('.reset');
let winner = false;

reset.addEventListener('click',resetGame);

Array.from(boxes).forEach((box)=>{
    box.addEventListener('click',()=>{
        const mark = box.querySelector('.play');
        if(mark.innerText==="" && winner===false){
            mark.innerText = turn;
            if(turn==="X"){
                player.style.color="red";
                mark.style.color="greenyellow";
            }
            else{
                player.style.color="greenyellow";
                mark.style.color="red";
            }
            checkWin();
            changeTurn();
            player.innerText=turn;
        }
    });
})

function changeTurn(){
    if(turn==="X")turn="O";
    else turn="X";
}

function resetGame() {
    Array.from(boxes).forEach((box)=>{
        box.querySelector('.play').innerText="";
    })
    document.querySelector('.gameover').style.display='none';
    document.querySelector('h2').style.display='block';
    winner=false;
}

function checkWin(){
    let mark = document.getElementsByClassName('play');
    console.log(3423);
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e=>{
        if((mark[e[0]].innerText===mark[e[1]].innerText) && (mark[e[1]].innerText===mark[e[2]].innerText) && (mark[e[2]].innerText!="")){
            document.querySelector('.gameover').style.display = 'block';
            document.querySelector('h2').style.display='none';
            winner=true;
            document.querySelector('.won').innerText=mark[e[0]].innerText;
        }
    })
}