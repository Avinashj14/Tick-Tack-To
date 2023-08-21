 console.log("welcome to tic tak to");
 let audioturn=new Audio("ting.mp3");
 let turn="X";
 let gameover=false;
 const changeTurn=()=>{

    return turn==="X"?"0":"X"
 }

 const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "win";  
            gameover=true;
           
        }
    })

 }

let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();
            if (!gameover){ 
                document.getElementsByClassName("info")[0].innerText="Turn for :"  +turn ;
            }
        }
    })
}) 



reset.addEventListener("click",(e)=>{
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    
})