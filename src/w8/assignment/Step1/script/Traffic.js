class Traffic {
  constructor() {
    this.vehicles = [];
  }

  run() {
    //어레이 각각한데 다 돌린다 forEach
    //eachVehicle 아무 이름을 달아주고 보기 쉽게 각각 update와 display 적용
    this.vehicles.forEach((eachVehicle) => {
      //separate 할때 vehicles안에 전체 싹다 비교해서 separate하겟다
      let sepForce = eachVehicle.separate(this.vehicles);
      eachVehicle.applyForce(sepForce);
      //cohesion 할때 vehicles안에 전체 싹다 cohesion하겟다
      let cohForce = eachVehicle.cohesion(this.vehicles);
      eachVehicle.applyForce(cohForce);
      //align 할때 vehicles안에 전체 싹다 align하겟다
      let aliForce = eachVehicle.align(this.vehicles);
      eachVehicle.applyForce(aliForce);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    //어레이 안에 넣어줌
    this.vehicles.push(
      new Vehicle(x, y, 1, 10, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
