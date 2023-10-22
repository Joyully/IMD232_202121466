class Repeller {
  constructor(x, y, power) {
    this.pos = createVector(x, y);
    this.power = power;
    this.rad = 25;
    this.draggingOffset = createVector(0, 0);
    this.isHover = false;
    this.isDragging = false;
  }

  repel(particle) {
    const force = p5.Vector.sub(particle.pos, this.pos); //파팊클의 방향으로 밀어내는
    const distance = force.mag(); //레펠러가 파티클로 향하는 길이?
    let strength = this.power / distance ** 2;
    force.setMag(strength);
    return force;
  }

  display() {
    noStroke();
    fill('slateblue');
    ellipse(this.pos.x, this.pos.y, 50);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.draggingOffset.set(mX - this.pos.x, mY - this.pos.y); //내 중심점에서 마우스를 향하는 벡터를 구하는
      this.isDragging = true;
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.set(mX - this.draggingOffset.x, mY - this.draggingOffset.y); //내 중심점에서 마우스를 향하는 벡터를 구하는
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
