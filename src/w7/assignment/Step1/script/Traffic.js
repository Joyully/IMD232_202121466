class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    //어레이 각각한데 다 돌린다 forEach
    //eachVehicle 아무 이름을 달아주고 보기 쉽게 각각 update와 display 적용
    this.vehicles.forEach((eachVehicle) => {
      let sepForce = eachVehicle.separate(this.vehicles);
      //separate 할때 vehicles안에 전체 싹다 비교해서 separate하겟다
      eachVehicle.applyForce(sepForce);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    //어레이 안에 넣어줌
    this.vehicles.push(
      new Vehicle(x, y, 1, 15, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
