const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let board = [];

function createCellSelect() {
  const cellSelectRow = document.createElement("div");
  for (i = 0; i < columns; i++) {
    cellSelectRow.classList.add("row");

    const cellSelect = document.createElement("div");
    cellSelect.classList.add( "col", "cell-select", "d-flex", "justify-content-center", "text-center");
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
      gamecell.classList.add( "col", "cell", "d-flex", "justify-content-center", "text-center");
      gamecell.id = `cell-${i}${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }

  console.log(board);
}

makeBoard();

board[4][6] = 'p1';
board[3][6] = 'p1';

function addChecker(rowLength, currentColumn){
  for(i=0; i < rowLength; i++ ){
    if(board[i][currentColumn] !== null) {
      return console.log(i-1, currentColumn);
    } 
  }
  return console.log('chop chop tiktok');
}

function cellSelectClick(e) {
  let rowLength = board.length-1;
  let currentSelect = e.target;
  let currentColumn = +currentSelect.parentElement.id.slice(-1);

  console.log(currentColumn);

  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");

  addChecker(rowLength, currentColumn);
  // for(i=0; i < rowLength; i++ ){
  //   if(board[i][currentColumn] !== null) {
  //     return console.log(i-1, currentColumn);
  //   } 
  //   // board[i][currentColumn] !== null ? console.log(i, currentColumn) : console.log('ketchup');
  //   // console.log(board[i][currentColumn]);
  // }

  // let currentRow = board.length-1;
  // let cell = document.querySelector(`#cell-${currentRow}${currentColumn}`);
  // if (board[5][currentColumn] === null) {
  //   cell.appendChild(piece);
  //   board[5][currentColumn] = "p1";
  // } else if(board[5][currentColumn] !== null) {
  //   let cell1 = document.querySelector(`#cell-${currentRow-1}${currentColumn}`);
  //   cell1.appendChild(piece);
  //   board[4][currentColumn] = "p1";
  // }

  // let currentRow = board.length-1;
  // let cell = document.querySelector(`#cell-${currentRow}${currentColumn}`);
  // if (board[currentRow][currentColumn] === null) {
  //   cell.appendChild(piece);
  //   board[currentRow][currentColumn] = "p1";
  // } else if(board[currentRow][currentColumn] !== null) {
  //   currentRow--;
  //   let cell1 = document.querySelector(`#cell-${currentRow-1}${currentColumn}`);
  //   cell1.appendChild(piece);
  //   board[currentRow-1][currentColumn] = "p1";
  // }

  // while(currentRow >= 0){

    // let cell = document.querySelector(`#cell-${currentRow}${currentColumn}`);
    // if (board[currentRow][currentColumn] === null) {
    //   cell.appendChild(piece);
    //   board[currentRow][currentColumn] = "p1";
    //   console.log(`current Row ${currentRow}`);
    // } 
    // currentRow--;
    
  // }

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
