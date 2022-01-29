const messageEl = document.getElementById("messageEl")
let messageTurn = document.getElementById("messageTurn")
const boardEl = document.getElementById("boardEl")
const endscreenEl = document.getElementById("endscreenEl")
const endMessage = document.getElementById("endMessage")
const restartBtn = document.getElementById("restartBtn")

let playerOTurn = true;
let counter = "o"
let oArr = []
let xArr = []
let square = 0;
let anyArr;
let hasPlayerWon = false

function turn(pos) {
    
    pos = document.getElementById(pos)

    if (hasPlayerWon === true) {return}

    if (pos.textContent === "-") {
        
        pos.classList.add("tileSpin")

        pos.textContent = counter
        

        if (playerOTurn) {
            anyArr = oArr
            pos.style.color = "lightskyblue"
            counter = "x"
            
        } else {
            anyArr = xArr
            pos.style.color = "lightpink"
            counter = "o"
            
        }

        anyArr.push(square)
        messageTurn.textContent = counter

        messageTurn.classList.toggle("o")
        messageTurn.classList.toggle("x")

        
        const winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

        winConditions.forEach(arr => {
            if (anyArr.includes(arr[0]) && anyArr.includes(arr[1]) && anyArr.includes(arr[2])) {
                return hasPlayerWon = true;
            }
        })
        
        if(hasPlayerWon){

            playerOTurn ? messageEl.innerHTML = `<span class="ox o" id="messageTurn">o</span> is the winner! 🥳` : 
            messageEl.innerHTML = `<span class="ox x" id="messageTurn">x</span> is the winner! 🎉`

            messageTurn = document.getElementById("messageTurn")

            messageEl.classList.add("textGrow")
            messageTurn.classList.add("textGrow")
        }


        playerOTurn = !playerOTurn
    }
}

const tile = document.querySelectorAll(".tile")

tile.forEach(item => item.addEventListener("click", disc => {
    square = Number(disc.target.id[4]);
    turn(disc.target.id);
}))

restartBtn.addEventListener("click", function() {
    hasPlayerWon = false
    playerOTurn = true
    counter = "o"
    oArr = []
    xArr = []
    square = 0;

    messageEl.innerHTML = `Player <span class="ox o" id="messageTurn">o</span> Turn`
    
    messageTurn = document.getElementById("messageTurn")

    messageEl.classList.remove("textGrow")
    messageTurn.classList.remove("textGrow")

    tile.forEach(item => { 
        item.textContent = "-";
        item.style.color = "#404040";
        item.classList.remove("tileSpin");
    })
})
