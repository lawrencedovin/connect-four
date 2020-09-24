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

    if(cellSelect.firstChild) cellSelect.removeChild();

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
  let currentSelect = e.target;
  let currentColumn = +currentSelect.parentElement.id.slice(-1);
  addChecker(rowLength, currentColumn);
}

// Hover Effect for Top Checkers
const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach((cell) => {
  let piece = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    piece.classList.add("piece", "align-self-center");
    isPlayer1 ? piece.style.background = "blue" : piece.style.background = "red";
    cell.appendChild(piece);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
});