const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let arr = [];
const col0 = [];
const col1 = [];
const col2 = [];
const col3 = [];
const col4 = [];
const col5 = [];
const col6 = [];

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
    // console.log(`${i} cell`);
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

    // let test = [];
    for (j = 0; j < columns; j++) {
      arr[i][j] = null;

      const gamecell = document.createElement("div");
      gamecell.classList.add(
        "col",
        "cell",
        "d-flex",
        "justify-content-center",
        "text-center"
      );
      gamecell.id = `cell${i}${j}`;
      // test[`col ${j}`] = `${i}${j}`;

      switch (j) {
        case 0:
          col0.push(`${i}${j}`);
          break;
        case 1:
          col1.push(`${i}${j}`);
          break;
        case 2:
          col2.push(`${i}${j}`);
          break;
        case 3:
          col3.push(`${i}${j}`);
          break;
        case 4:
          col4.push(`${i}${j}`);
          break;
        case 5:
          col5.push(`${i}${j}`);
          break;
        case 6:
          col6.push(`${i}${j}`);
          break;
        default:
        // console.log(`col: ${j}`);
      }

      switch (j) {
        case `${j}`:
          `col${j}`.push(`${i}${j}`);
          break;
        default:
          console.log(j)
      }

      //   gamecell.innerText = `row ${i} column ${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
  
  console.log(arr);
  console.log(col0);
  console.log(col1);
}

makeBoard();

function cellSelectClick(e) {
  let currentSelect = e.target;
  // alert(`clicked ${currentSelect.id}`);
  let currentColumnNumber = currentSelect.parentElement.id.slice(-1);
  console.log(currentColumnNumber);

  if (currentColumnNumber === "0") {
    console.log("im pogi");
  }
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");

  const celly = document.querySelector("#cell56");
  const celly2 = document.querySelector("#cell36");
  celly.appendChild(piece);
  celly2.appendChild(piece);
}

const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach((cell) => {
  const piece = document.createElement("div");
  piece.classList.add("piece", "align-self-center");
  cell.addEventListener("mouseover", () => {
    cell.appendChild(piece);
    // console.log(cell);
  });
  cell.addEventListener("mouseleave", () => {
    cell.removeChild(piece);
  });
});

// function makeBoard(rows, columns) {
//     for (i = 0; i < rows; i++) {
//       arr[i] = [];
//       for (j = 0; j < columns; j++) {
//         if (i === 0 && j === 0) arr[i][j] = 1;
//         else arr[i][j] = null;
//       }
//     }
//   }
