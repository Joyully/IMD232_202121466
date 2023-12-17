class GameOfLife {
  constructor() {
    this.cells = [];
    this.rowNum = 60;
    this.colNum = 60;

    // 셀 생성 및 배치
    for (let row = 0; row < this.rowNum; row++) {
      for (let col = 0; col < this.colNum; col++) {
        const x = (width / this.colNum) * col;
        const y = (height / this.rowNum) * row;
        const newCell = new Cell(
          x,
          y,
          width / this.colNum,
          height / this.rowNum
        );
        this.cells.push(newCell);
      }
    }
    // 이웃 셀 설정
    for (let row = 0; row < this.rowNum; row++) {
      for (let col = 0; col < this.colNum; col++) {
        const neighborsIdx = [
          this.getIdx(row - 1, col - 1),
          this.getIdx(row - 1, col),
          this.getIdx(row - 1, col + 1),
          this.getIdx(row, col + 1),
          this.getIdx(row + 1, col + 1),
          this.getIdx(row + 1, col),
          this.getIdx(row + 1, col - 1),
          this.getIdx(row, col - 1),
        ];

        // 가장자리 처리
        if (col === 0) {
          neighborsIdx[0] = -1;
          neighborsIdx[6] = -1;
          neighborsIdx[7] = -1;
        } else if (col === this.colNum - 1) {
          neighborsIdx[2] = -1;
          neighborsIdx[3] = -1;
          neighborsIdx[4] = -1;
        }

        if (row === 0) {
          neighborsIdx[0] = -1;
          neighborsIdx[1] = -1;
          neighborsIdx[2] = -1;
        } else if (row === this.rowNum - 1) {
          neighborsIdx[4] = -1;
          neighborsIdx[5] = -1;
          neighborsIdx[6] = -1;
        }

        const neighbors = [];
        neighborsIdx.forEach((eachIdx) => {
          neighbors.push(eachIdx >= 0 ? this.cells[eachIdx] : null);
        });

        const idx = this.getIdx(row, col);
        this.cells[idx].setNeighbors(neighbors);
      }
    }
    // 초기 상태 무작위 설정
    randomSeed(1);
    this.cells.forEach((each) => {
      const randomState = floor(random(3));
      // 0: 바위, 1: 보, 2: 가위
      each.state = randomState;
    });
  }
  // 행렬 인덱스 반환
  getIdx(row, col) {
    return row * this.colNum + col;
  }

  draw() {
    background('gainsboro');

    this.cells.forEach((each) => {
      each.calcNextState();
    });

    this.cells.forEach((each) => {
      each.update();
    });

    this.cells.forEach((each) => {
      each.display(mouseX, mouseY);
    });
  }
}

let game;
function setup() {
  setCanvasContainer('myCanvas', 1, 1, true);
  game = new GameOfLife();
}

function draw() {
  game.draw();
}

function mouseClicked() {
  for (let idx = 0; idx < game.cells.length; idx++)
    if (game.cells[idx].toggleState(mouseX, mouseY)) break;
}
