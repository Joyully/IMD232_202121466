class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = 0; // 셀의 현재 상태 (0: 바위, 1: 보, 2: 가위)
    this.nextState = this.state;
    this.neighbors = [];
  }

  // 이웃 셀 설정
  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    const winningStates = [2, 0, 1];
    // 현재 셀과 같은 상태를 가진 이웃 필터링
    const winningNeighbors = this.neighbors.filter(
      (eachNeighbor) =>
        eachNeighbor && winningStates[eachNeighbor.state] === this.state
    );

    // 이기는게 2개 이하 현재 상태 유지 그 이상이면 첫 번째 상태로
    if (winningNeighbors.length <= 2) {
      this.nextState = this.state;
    } else {
      const winningNeighbor = winningNeighbors[0];
      this.nextState = winningNeighbor.state;
    }
  }

  // 상태 업데이트
  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  // 상태 토글
  toggleState(mx, my) {
    // 클릭이 불가능하면 아무 작업하지 않음
    if (!this.isClickable) return false;
    // 마우스가 셀 위에 있지 않으면 아무 작업하지 않음
    if (!this.isHover(mx, my)) return false;
    // 바위, 보, 가위를 순환하면서 상태 변경
    this.state = (this.state + 1) % 3;
    return true;
  }

  // 화면에 표시
  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    // 상태에 따라 다른 색상으로 칠하기
    fill(
      this.state === 0
        ? color('#4F4BDF') // 바위
        : this.state === 1
        ? color('#5B96A0') // 보
        : color('#D5CABD') // 가위
    );
    rect(0, 0, this.w, this.h);
    pop();
  }
}
