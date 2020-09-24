const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let board = [];
let isPlayer1 = true;

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

  console.log(board);
}

makeBoard();

// board[4][6] = 'p1';
// board[2][6] = 'p1';

function currentPlayer(piece, row, column, cell) {
  if (isPlayer1) {
    piece.classList.add("p1");
    board[row][column] = "p1";
    cell.appendChild(piece);
    return (isPlayer1 = false);
  } else {
    piece.classList.add("p2");
    board[row][column] = "p2";
    cell.appendChild(piece);
    return (isPlayer1 = true);
  }
}

function addChecker(rowLength, currentColumn) {
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");

  let cell = document.querySelector(`#cell-${rowLength}${currentColumn}`);
  for (i = 0; i <= rowLength; i++) {
    // console.log(`${board[i][currentColumn]} at ${i} ${currentColumn}`);
    if (board[i][currentColumn] !== null) {
      cell = document.querySelector(`#cell-${i - 1}${currentColumn}`);

      // currentPlayer(piece, i-1, currentColumn, cell);
      if (isPlayer1) {
        piece.classList.add("p1");
        board[i - 1][currentColumn] = "p1";
        cell.appendChild(piece);
        return (isPlayer1 = false);
      } else {
        piece.classList.add("p2");
        board[i - 1][currentColumn] = "p2";
        cell.appendChild(piece);
        return (isPlayer1 = true);
      }
      // board[i-1][currentColumn] = "p1";
      // // return console.log(i, currentColumn);
      // return cell.appendChild(piece);
    }
  }

  // currentPlayer(piece, rowLength, currentColumn, cell);
  if (isPlayer1) {
    piece.classList.add("p1");
    board[rowLength][currentColumn] = "p1";
    cell.appendChild(piece);
    return (isPlayer1 = false);
  } else {
    piece.classList.add("p2");
    board[rowLength][currentColumn] = "p2";
    cell.appendChild(piece);
    return (isPlayer1 = true);
  }
  // board[rowLength][currentColumn] = "p1";
  // return cell.appendChild(piece);
  // addChecker(rowLength, currentColumn);
}

function cellSelectClick(e) {
  let rowLength = board.length - 1;
  let currentSelect = e.target;
  let currentColumn = +currentSelect.parentElement.id.slice(-1);
  addChecker(rowLength, currentColumn);
}

// rename
const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach((cell) => {
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");
  cell.addEventListener("mouseover", () => {
    cell.appendChild(piece);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
});
