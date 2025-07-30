let resetBtn = document.querySelector(".reset-btn")
let boxes = document.querySelectorAll(".box")
let clicks = 0;

let turnOfO = false;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (!turnOfO) {
                box.innerText = "O"
                box.style.color = "#A8DADC"
                box.disabled = true
                box.style.backgroundColor = "#1D3557"
                box.style.transition = "all .5s ease"
                turnOfO = true
                clicks++;
            } else {
                box.innerText = "X"
                box.style.color = "#1D3557"
                box.disabled = true
                box.style.backgroundColor = "#457B9D"
                box.style.transition = "all .5s ease"
                turnOfO = false
                clicks++;
            }
            winnerCheck();
            checkDraw();
        }
    })
    return clicks;
})


// TO reset the Game 

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.backgroundColor = "white"
        box.disabled = false
        results.innerText = "Tic-Tac-Toe"
        results.style.color = "black"
        box.style.transition = "all .5s ease"
        clicks = 0;
    })
})

// To sroll page to start game 

let startBtn = document.querySelector(".start-btn")
let gameSegment = document.getElementById("game-segment")

startBtn.addEventListener("click", () => {
    gameSegment.scrollIntoView({
        behavior: "smooth"
    })
})

// To check the winner 

let results = document.querySelector(".game-name")
let winnerCheck = () => {
    for (let patterns of winPatterns) {
        let pos1 = boxes[patterns[0]].innerText
        let pos2 = boxes[patterns[1]].innerText
        let pos3 = boxes[patterns[2]].innerText
        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            results.innerText = `Congratulations! "${pos1}" is winner`
            results.style.color = "green"
            boxes.forEach((box) => { box.disabled = true })
            break;
        }

    }
}

function checkDraw() {
    if (clicks === 9 && results.innerText === "Tic-Tac-Toe") {
        console.log(clicks)
        results.innerText = `Draw`
        results.style.color = "orange"
    }
}
