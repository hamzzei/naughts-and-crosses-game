const messageEl = document.getElementById("messageEl")
let messageTurn = document.getElementById("messageTurn")
const boardEl = document.getElementById("boardEl")
const tile1 = document.getElementById("tile1")
const tile2 = document.getElementById("tile2")
const tile3 = document.getElementById("tile3")
const tile4 = document.getElementById("tile4")
const tile5 = document.getElementById("tile5")
const tile6 = document.getElementById("tile6")
const tile7 = document.getElementById("tile7")
const tile8 = document.getElementById("tile8")
const tile9 = document.getElementById("tile9")
const endscreenEl = document.getElementById("endscreenEl")
const endMessage = document.getElementById("endMessage")
const restartBtn = document.getElementById("restartBtn")

let playerOTurn = true;
let counter = "o"
let oArr = []
let xArr = []
let square = 0;
let anyArr;
const allTilesArray = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9]
let hasPlayerWon = false


function turn(pos) {

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

        

        if ( (anyArr.includes(1) && anyArr.includes(2) && anyArr.includes(3)) ||
            (anyArr.includes(4) && anyArr.includes(5) && anyArr.includes(6)) ||
            (anyArr.includes(7) && anyArr.includes(8) && anyArr.includes(9)) ||
            (anyArr.includes(1) && anyArr.includes(4) && anyArr.includes(7)) ||
            (anyArr.includes(2) && anyArr.includes(5) && anyArr.includes(8)) ||
            (anyArr.includes(3) && anyArr.includes(6) && anyArr.includes(9)) ||
            (anyArr.includes(1) && anyArr.includes(5) && anyArr.includes(9)) ||
            (anyArr.includes(3) && anyArr.includes(5) && anyArr.includes(7)) 
        ){
            hasPlayerWon = true

            playerOTurn ? messageEl.innerHTML = `<span class="ox o" id="messageTurn">o</span> is the winner! 🥳` : 
            messageEl.innerHTML = `<span class="ox x" id="messageTurn">x</span> is the winner! 🎉`

            messageTurn = document.getElementById("messageTurn")

            messageEl.classList.add("textGrow")
            messageTurn.classList.add("textGrow")
        }


        playerOTurn = !playerOTurn
    }
}

function modifyTile(squareVal, tileNum) {
    square = squareVal
    turn(tileNum)
}
// const tile = document.querySelectorAll(".tile")

// tile.forEach(item => item.addEventListener("click", disc => {
//     square = Number(disc.target.id[4]);
//     turn(Object(disc.target.id));
// }))

tile1.addEventListener("click", function() {
    modifyTile(1, tile1)
})
tile2.addEventListener("click", function() {
    modifyTile(2, tile2)
})
tile3.addEventListener("click", function() {
    modifyTile(3, tile3)
})
tile4.addEventListener("click", function() {
    modifyTile(4, tile4)
})
tile5.addEventListener("click", function() {
    modifyTile(5, tile5)
})
tile6.addEventListener("click", function() {
    modifyTile(6, tile6)
})
tile7.addEventListener("click", function() {
    modifyTile(7, tile7)
})
tile8.addEventListener("click", function() {
    modifyTile(8, tile8)
})
tile9.addEventListener("click", function() {
    modifyTile(9, tile9)
})

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

    for (let i=0; i < allTilesArray.length; i++) {
        allTilesArray[i].textContent = "-"
        allTilesArray[i].style.color = "#404040"
        allTilesArray[i].classList.remove("tileSpin")
    }
})