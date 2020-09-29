const cellSelectContainer = document.querySelector("#cell-select-container");
class Game {
  constructor(rows = 6, columns = 7) {
    this.rows = rows;
    this.columns = columns;
    this.isPlayer1 = true;
    this.currentPlayer = "p1";
    this.board = [];
    this.makeBoard();
    this.hoverSelect();
    this.resetButtonClick();
  }

  createCellSelect() {
    const cellSelectRow = document.createElement("div");
    for (let i = 0; i < this.columns; i++) {
      cellSelectRow.classList.add("row");

      const cellSelect = document.createElement("div");
      cellSelect.classList.add("col", "cell-select", "d-flex", "justify-content-center", "text-center");
      cellSelect.id = `top-${i}`;

      this.cellSelectClick = this.cellSelectClick.bind(this);
      cellSelect.addEventListener("click", this.cellSelectClick);

      cellSelectRow.appendChild(cellSelect);
    }
    cellSelectContainer.appendChild(cellSelectRow);
  }

  makeBoard() {
    this.createCellSelect();
    const gameboard = document.querySelector("#gameboard");

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      const row = document.createElement("div");
      row.classList.add("row", `row-${i}`, "checker-row");

      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = null;
        const gamecell = document.createElement("div");
        gamecell.classList.add( "col", "cell", "d-flex", "justify-content-center", "text-center");
        gamecell.id = `cell-${i}${j}`;
        row.appendChild(gamecell);
      }
      gameboard.appendChild(row);
    }
  }

  addChecker(rowLength, currentColumn) {
    const piece = document.createElement("div");
    let cell = document.querySelector(`#cell-${rowLength}${currentColumn}`);
    let row = cell.id.slice(-2, -1);

    this.isPlayer1 ? (this.currentPlayer = "p1") : (this.currentPlayer = "p2");
    piece.classList.add("piece", "align-self-center", this.currentPlayer);

    for (let i = 0; i <= rowLength; i++) {

      if (this.board[i][currentColumn] !== null) {
        cell = document.querySelector(`#cell-${i - 1}${currentColumn}`);
        row = cell.id.slice(-2, -1);
        document.documentElement.style.setProperty("--fall-height", `-${row * 4.5}rem`);
        this.board[i - 1][currentColumn] = this.currentPlayer;
        cell.appendChild(piece);
        
        return this.isPlayer1 ? (this.isPlayer1 = false) : (this.isPlayer1 = true);
      }
    }

    document.documentElement.style.setProperty("--fall-height", `-${row * 4.5}rem`
    );
    this.board[rowLength][currentColumn] = this.currentPlayer;
    cell.appendChild(piece);

    return this.isPlayer1 ? (this.isPlayer1 = false) : (this.isPlayer1 = true);
  }

  endGame(msg) {
    alert(msg);
  }

  cellSelectClick(e) {
    const rowLength = this.board.length - 1;
    const currentSelect = e.target;
    const currentColumn = +currentSelect.parentElement.id.slice(-1);
    this.addChecker(rowLength, currentColumn);

    if (this.checkForWin()) {
      this.endGame(`Player ${this.currentPlayer.slice(-1)} won!`);
      cellSelectContainer.style.pointerEvents = "none";
    }

    if (this.board.every((row) => row.every((cell) => cell))) {
      this.endGame("Tie!");
      cellSelectContainer.style.pointerEvents = "none";
    }
  }

  // Hover Piece for Cells
  hoverSelect() {
    const cellSelect = document.querySelectorAll(".cell-select");
    cellSelect.forEach((cell) => {
      let piece = document.createElement("div");
      cell.addEventListener("mouseover", () => {
        piece.classList.add("piece", "align-self-center");
        this.isPlayer1 ? (piece.style.background = "#3DE7FB") : (piece.style.background = "#FF9900");
        cell.appendChild(piece);
      });
      cell.addEventListener("mouseleave", () => {
        cell.removeChild(piece);
      });
      cell.addEventListener("click", () => {
        cell.removeChild(piece);
      });
    });
  }

  checkForWin() {
    const _win = (cells) =>
      cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.rows &&
          x >= 0 &&
          x < this.columns &&
          this.board[y][x] === this.currentPlayer
      );

      for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.columns; x++) {
        
          const horizontal = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
          const vertical = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
          const diagonalRight = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
          const diagonalLeft = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
          if (_win(horizontal) || _win(vertical) || _win(diagonalRight) || _win(diagonalLeft)) {
            return true;
          }
        }
      }
  }

  resetGame() {
    document.querySelectorAll(".col").forEach((column) => column.remove());
    cellSelectContainer.style.pointerEvents = "auto";
    new Game();
  }

  resetButtonClick() {
    const resetButton = document.querySelector(".btn");
    resetButton.addEventListener("click", this.resetGame);
  }
}

new Game();
