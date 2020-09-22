const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let board = [];

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

    // let test = [];
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
      // test[`col ${j}`] = `${i}${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
  
  console.log(board);
}

makeBoard();

function cellSelectClick(e) {
  let currentSelect = e.target;
  // alert(`clicked ${currentSelect.id}`);
  let currentColumnNumber = +(currentSelect.parentElement.id.slice(-1));
  console.log(currentColumnNumber);
  
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");

  if(board[5][currentColumnNumber] === null){
    let cell = document.querySelector(`#cell-5${currentColumnNumber}`);
    cell.appendChild(piece);
    board[5][currentColumnNumber] = 'p1';
  } else return;
  console.log(board[5][6]);

  // if (currentColumnNumber === "0") {
  //   console.log("im pogi");
  // }

  // const celly = document.querySelector("#cell-56");
  // const celly2 = document.querySelector("#cell-36");
  // celly.appendChild(piece);
  // celly2.appendChild(piece);
  // console.log(celly);
}

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
