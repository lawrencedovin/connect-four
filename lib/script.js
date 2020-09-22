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
    // alert(`clicked ${currentSelect.id}`);
    const piece = document.createElement("div");
    piece.classList.add("piece", "align-self-center");

    // currentSelect.addEventListener('mouseover', () => {
    //     currentSelect.appendChild(piece);
    // });

    // currentSelect.addEventListener("mouseover", () => {
    //   currentSelect.style.background = "red";
    // });
    // currentSelect.addEventListener("mouseout", () => {
    //   currentSelect.style.background = "white";
    // });

    // currentSelect.addEventListener('mouseout', () => {
    //     currentSelect.removeChild(piece);
    // });

    

    const celly = document.querySelector("#cell56");
    celly.appendChild(piece);
}

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

    for (j = 0; j < columns; j++) {
      arr[i][j] = null;

      const gamecell = document.createElement("div");
      gamecell.classList.add("col", "cell", "d-flex", "justify-content-center", "text-center");
      gamecell.id = `cell${i}${j}`;
    //   gamecell.innerText = `row ${i} column ${j}`;
      row.appendChild(gamecell);
    }

    gameboard.appendChild(row);
  }
}

makeBoard();

// document.querySelector(".cell-select").addEventListener("mouseover", mouseOver);
// document.querySelector(".cell-select").addEventListener("mouseout", mouseOut);

const cellSelect = document.querySelectorAll(".cell-select");
cellSelect.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  });
  item.addEventListener("mouseout", () => {
    item.style.background = "white";
  });
})

// document.querySelector(".cell-select").addEventListener("mouseover", mouseOver);
// document.querySelector(".cell-select").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.querySelector(".cell-select").style.background = "red";
//     // const piece = document.createElement("div");
//     // piece.classList.add("piece", "align-self-center");
//     // document.querySelector(".cell-select").appendChild(piece);
// }

// function mouseOut() {
//   document.querySelector(".cell-select").style.background = "white";
//   // const piece1 = document.createElement("div");
//   // piece1.classList.add("piece", "align-self-center");
//   // document.querySelector(".cell-select").removeChild(piece1);
// }

// function makeBoard(rows, columns) {
//     for (i = 0; i < rows; i++) {
//       arr[i] = [];
//       for (j = 0; j < columns; j++) {
//         if (i === 0 && j === 0) arr[i][j] = 1;
//         else arr[i][j] = null;
//       }
//     }
//   }
