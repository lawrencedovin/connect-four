const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let board = [];
let isPlayer1 = true;
let currentPlayer = "p1";

function createCellSelect() {
  const cellSelectRow = document.createElement("div");
  for (i = 0; i < columns; i++) {
    cellSelectRow.classList.add("row");

    const cellSelect = document.createElement("div");
    cellSelect.classList.add(
      "col",
      "cell-select",
      "d-flex",
      "justify-content-center",
      "text-center"
    );
    cellSelect.id = `top-${i}`;

    cellSelect.addEventListener("click", cellSelectClick);

    cellSelectRow.appendChild(cellSelect);
  }
  gameboard.appendChild(cellSelectRow);
}

function makeBoard() {
  createCellSelect();

  for (i = 0; i < rows; i++) {
    board[i] = [];
    const row = document.createElement("div");
    row.classList.add("row", `row-${i}`);

    for (j = 0; j < columns; j++) {
      board[i][j] = null;
      const gamecell = document.createElement("div");
      gamecell.classList.add(
        "col",
        "cell",
        "d-flex",
        "justify-content-center",
        "text-center"
      );
      gamecell.id = `cell-${i}${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
}

makeBoard();

function addChecker(rowLength, currentColumn) {
  const piece = document.createElement("div");
  let cell = document.querySelector(`#cell-${rowLength}${currentColumn}`);

  isPlayer1 ? (currentPlayer = "p1") : (currentPlayer = "p2");
  piece.classList.add("piece", "align-self-center", currentPlayer);

  for (i = 0; i <= rowLength; i++) {
    if (board[i][currentColumn] !== null) {
      cell = document.querySelector(`#cell-${i - 1}${currentColumn}`);

      board[i - 1][currentColumn] = currentPlayer;
      cell.appendChild(piece);

      return isPlayer1 ? (isPlayer1 = false) : (isPlayer1 = true);
    }
  }

  board[rowLength][currentColumn] = currentPlayer;
  cell.appendChild(piece);

  return isPlayer1 ? (isPlayer1 = false) : (isPlayer1 = true);
}

function cellSelectClick(e) {
  const rowLength = board.length - 1;
  const currentSelect = e.target;
  const currentColumn = +currentSelect.parentElement.id.slice(-1);
  addChecker(rowLength, currentColumn);
  // gameWon();
  gameWon();
}

// Hover Piece for Cells
const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach((cell) => {
  let piece = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    piece.classList.add("piece", "align-self-center");
    isPlayer1
      ? (piece.style.background = "blue")
      : (piece.style.background = "red");
    cell.appendChild(piece);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
  cell.addEventListener("click", () => {
    cell.removeChild(piece);
  });
});

function gameWon() {
  

  
  // const vertical = [];
  // const diagonalRight = [];
  // const diagonalLeft = [];
  for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++) {
      const horizontal = [board[i][j], board[i][j+1], board[i][j+2], board[i][j+3]];
      const horizontalSet = new Set(horizontal);
      // return console.log(board[i][j], board[i][j+1], board[i][j+2], board[i][j+3]);
      // console.log(board[i][j], board[i][j+1], board[i][j+2], board[i][j+3]);
      if(horizontalSet.size === 1 && !horizontalSet.has(null)) alert(`Player ${currentPlayer.slice(-1)} has won!`);
      // console.log(horizontalSet.size);
      if(board[i][j] === "p1" && board[i][j+1] === "p1" && board[i][j+2] === "p1" && board[i][j+3] === "p1") return console.log("p1 won!");
      
    }
  }
}
