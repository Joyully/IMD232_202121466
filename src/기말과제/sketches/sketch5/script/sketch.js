let messages = ['고민이 있으신가요?', '고민을 생각하고', '볼을 흔들어보세요'];
let displayTime = 150; // 각 글자가 표시될 시간 (프레임 수)
let fadeOutTime = 30; // 페이드 아웃에 사용될 시간
let rectDisplayTime = 400; // 사각형이 표시될 시간 (프레임 수)
let currentMessageIndex = 0; // 현재 표시 중인 글자의 인덱스
let alpha = 255; // 텍스트의 투명도
let rectAlpha = 255; // 사각형의 투명도

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  if (rectDisplayTime > 0) {
    rectMode(CENTER);
    fill(50, 255);
    rect(width / 2, height / 2, 400);
    rectDisplayTime--;
    rectAlpha = 255;
  }

  if (currentMessageIndex < messages.length) {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0, alpha); // 텍스트의 투명도 적용
    text(messages[currentMessageIndex], width / 2, height / 2);

    // 프레임이 지날수록 displayTime을 감소
    displayTime--;

    // 페이드 아웃 효과
    if (displayTime <= fadeOutTime) {
      alpha = map(displayTime, 0, fadeOutTime, 0, 255);
    }

    if (displayTime <= 0) {
      // 다음 글자로 넘어가고 displayTime 및 alpha 초기화
      currentMessageIndex++;
      displayTime = 120;
      alpha = 255;
    }
  }
}
