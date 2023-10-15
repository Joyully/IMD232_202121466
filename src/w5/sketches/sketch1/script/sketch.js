let aVariable = 20;
let anArray = [30, 60, 90];
let anotherArray = [];

function setup() {
  setCanvasContainer('myCanvas', 3, 2, true);

  //콘솔로 확인하는 어레이 적용
  console.log('aVariable', aVariable);
  console.log('anArray', anArray);
  //Array는 0 값부터 시작
  console.log('anArray[0]', anArray[0]); //30
  console.log('anArray[1]', anArray[1]); //60
  console.log('anArray[2]', anArray[2]); //90
  console.log('anArray.length', anArray.length); //Array안에 있는 값 갯수

  console.log('anotherArray.length', anotherArray.length); //let에서 값을 안줌 0으로 뜸
  anotherArray.push('어레이에 넣은 첫 데이터'); //push 해주면 값이 들어감
  console.log('anotherArray[0]', anotherArray[0]);
  background('gainsboro');
}

function draw() {}
