const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let arr = [];

function createCellSelect() {
  const cellSelectRow = document.createElement("div");
  for (i = 0; i < columns; i++) {
    cellSelectRow.classList.add("row");
    
    const cellSelect = document.createElement("div");
    cellSelect.classList.add("col", "cell-select", "d-flex", "justify-content-center", "text-center");
    cellSelect.id = `top-${i}`;

    cellSelect.addEventListener('click', cellSelectClick);
    console.log(`${i} cell`);
    // cellSelect.innerText = `${i}`;

    cellSelectRow.appendChild(cellSelect);
  }
  gameboard.appendChild(cellSelectRow);
}

function makeBoard() {
  createCellSelect();
  for (i = 0; i < rows; i++) {
    arr[i] = [];

    const row = document.createElement("div");
    row.classList.add("row", `row-${i}`);

    let test = [];
    for (j = 0; j < columns; j++) {
      arr[i][j] = null;

      const gamecell = document.createElement("div");
      gamecell.classList.add("col", "cell", "d-flex", "justify-content-center", "text-center");
      gamecell.id = `cell${i}${j}`;
      test[`col ${j}`] = `${i}${j}`;

    //   gamecell.innerText = `row ${i} column ${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
  

  console.log(arr);
}

makeBoard();

function cellSelectClick(e) {
  let currentSelect = e.target;
  // alert(`clicked ${currentSelect.id}`);
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");

  
  
  const celly = document.querySelector("#cell56");
  celly.appendChild(piece);
}

const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach(cell => {
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");
  cell.addEventListener("mouseover", () => {
    cell.appendChild(piece);
    console.log(cell);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
})

// function makeBoard(rows, columns) {
//     for (i = 0; i < rows; i++) {
//       arr[i] = [];
//       for (j = 0; j < columns; j++) {
//         if (i === 0 && j === 0) arr[i][j] = 1;
//         else arr[i][j] = null;
//       }
//     }
//   }
