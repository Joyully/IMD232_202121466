let traffic;
//화면 밖으로 넘어갈 때 썻던 offset 값주기
let infiniteOffset = 80;

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100); //컬러모드를 hsl로 바꾸고 적용
  background('gainsboro'); //배경
  traffic = new Traffic(); //let 에 class traffic을 넣음
  //10부터 시작 10아래부터는 안나옴 랜덤한 높이와 랜덤한 넓이에서 10개가 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  background('gainsboro'); //배경 색
  traffic.run(); //class traffic 안에 run 작동
}

//마우스 드래그 하면 새로 생성되게
//trafiic js 안에 만든 vehicle추가 한거 적용 -> 마우스 따라
function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
}
