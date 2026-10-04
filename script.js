let currentPlayer = "X";
let gameOver = false;

let cells = document.querySelectorAll(".cell");
let turn = document.getElementById("turn");
let restart = document.getElementById("restart");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {

        if (cell.textContent != "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();

        if (!gameOver) {
            if (currentPlayer == "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

            turn.textContent = "Player " + currentPlayer + "'s Turn";
        }
    });
});

function checkWinner() {

    for (let pattern of winningPatterns) {

        let a = cells[pattern[0]].textContent;
        let b = cells[pattern[1]].textContent;
        let c = cells[pattern[2]].textContent;

        if (a != "" && a == b && b == c) {
            turn.textContent = "Player " + a + " Wins!";
            gameOver = true;
            return;
        }
    }

    let draw = true;

    for (let cell of cells) {
        if (cell.textContent == "") {
            draw = false;
        }
    }

    if (draw) {
        turn.textContent = "It's a Draw!";
        gameOver = true;
    }
}

restart.addEventListener("click", function() {

    for (let cell of cells) {
        cell.textContent = "";
    }

    currentPlayer = "X";
    gameOver = false;
    turn.textContent = "Player X's Turn";
});