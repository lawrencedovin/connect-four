const gameboard = document.querySelector("#gameboard");
const rows = 6;
const columns = 7;
let arr = [];

/* <div class="col cell-select d-flex justify-content-center text-center" id="0">
    <div class="piece align-self-center"></div>
</div> */

// function cellSelectClick(e) {
//     let currentSelect = e.target;
//     currentSelect.addEventListener('click', () => {
//         alert('clicked');
//     });
// }

function cellSelectClick(e) {
    let currentSelect = e.target;
    // currentSelect.addEventListener('click', () => {
    //     alert('clicked');
    // });
    alert(`clicked ${currentSelect.id}`);
}

function createCellSelect() {
  const cellSelectRow = document.createElement("div");
  for (i = 0; i < columns; i++) {
    cellSelectRow.classList.add("row");
    
    const cellSelect = document.createElement("div");
    cellSelect.classList.add("col", "cell-select", "d-flex", "justify-content-center", "text-center");
    cellSelect.id = `${i}`;

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

    for (j = 0; j < columns; j++) {
      arr[i][j] = null;

      const gamecell = document.createElement("div");
      gamecell.classList.add("col", "cell", "d-flex", "justify-content-center", "text-center");
      gamecell.id = `${i}${j}`;
    //   gamecell.innerText = `row ${i} column ${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
}

makeBoard();

console.log();

// function makeBoard(rows, columns) {
//     for (i = 0; i < rows; i++) {
//       arr[i] = [];
//       for (j = 0; j < columns; j++) {
//         if (i === 0 && j === 0) arr[i][j] = 1;
//         else arr[i][j] = null;
//       }
//     }
//   }
