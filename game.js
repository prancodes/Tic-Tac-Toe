
let divs = document.querySelectorAll(".box");
let currPlayer = "X";

let index = Array(9).fill(null);

divs.forEach((div,idx) => {
    div.addEventListener("click",()=>{
        const id = Number(idx);
        index[id] = currPlayer;
        if(div.innerText === ""){
            div.innerText = currPlayer;
            checkWin();
            currPlayer = currPlayer == "X" ? "O" : "X";
        }
    }) 
});


function checkWin(){
    if(
        index[0] !== null && index[0] == index[1] && index[1] == index[2] ||
        index[3] !== null && index[3] == index[4] && index[4] == index[5] ||
        index[6] !== null && index[6] == index[7] && index[7] == index[8] ||
        index[0] !== null && index[0] == index[3] && index[3] == index[6] ||
        index[1] !== null && index[1] == index[4] && index[4] == index[7] ||
        index[2] !== null && index[2] == index[5] && index[5] == index[8] ||
        index[0] !== null && index[0] == index[4] && index[4] == index[8] ||
        index[2] !== null && index[2] == index[4] && index[4] == index[6]
        ){
        setTimeout(popUp,300);
        let winResult = document.querySelector("#winResult");
        // currPlayer = currPlayer == "X" ? "O" : "X";
        winResult.innerText = `Player '${currPlayer}' wins!`;
    }
    else{
        let count = 0;
        for(let i=0;i<9;i++){
            if(index[i] !== null){
                count++;
            }
        }
        if(count == 9){
            setTimeout(popUp,300);
            let winResult = document.querySelector("#winResult");
            winResult.innerText = "It's a draw!"
        }
    }
}
        
function popUp(){
    let container = document.querySelector(".container");
    container.style.visibility = "hidden";

    let logo = document.querySelector("#logo");
    logo.style.visibility = "hidden";
    
    let popUp = document.querySelector("#popUp");
    popUp.style.visibility = "visible";

    let replay = document.querySelector("#yes");
    replay.addEventListener("click",()=>{
        location.reload();
    });
}

    




