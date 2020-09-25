const cellSelectContainer = document.querySelector("#cell-select-container");
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
    cellSelect.classList.add("col", "cell-select", "d-flex", "justify-content-center", "text-center");
    cellSelect.id = `top-${i}`;

    cellSelect.addEventListener("click", cellSelectClick);

    cellSelectRow.appendChild(cellSelect);
  }
  cellSelectContainer.appendChild(cellSelectRow);
}

function makeBoard() {
  createCellSelect();

  for (i = 0; i < rows; i++) {
    board[i] = [];
    const row = document.createElement("div");
    row.classList.add("row", `row-${i}`, "checker-row");

    for (j = 0; j < columns; j++) {
      board[i][j] = null;
      const gamecell = document.createElement("div");
      gamecell.classList.add( "col", "cell", "d-flex", "justify-content-center", "text-center");
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

function endGame(msg) {
  alert(msg);
}

function cellSelectClick(e) {
  const rowLength = board.length - 1;
  const currentSelect = e.target;
  const currentColumn = +currentSelect.parentElement.id.slice(-1);
  addChecker(rowLength, currentColumn);
  if (checkForWin()) {
    return endGame(`Player ${currentPlayer.slice(-1)} won!`);
  }
}

// Hover Piece for Cells
const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach((cell) => {
  let piece = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    piece.classList.add("piece", "align-self-center");
    isPlayer1 ? (piece.style.background = "#3DE7FB") : (piece.style.background = "#FF9900");
    cell.appendChild(piece);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
  cell.addEventListener("click", () => {
    cell.removeChild(piece);
  });
});

function checkForWin() {
  function _win(cells) {
    
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < rows &&
        x >= 0 &&
        x < columns &&
        board[y][x] === currentPlayer
    );
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      
      const horizontal = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vertical = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagonalRight = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diaganolLeft = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horizontal) || _win(vertical) || _win(diagonalRight) || _win(diaganolLeft)) {
        return true;
      }
    }
  }
}