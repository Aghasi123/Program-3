class HardGrass extends Animals{
  constructor(x, y){
    super(x, y);
    this.multiplay = 0;
    this.energy = 10;
    this.health = 20;
    this.slowness = 0;
    this.previousCharacter = 0;
    this.wannaDestroy = 0;
    }
    getNewDirections() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1],
      ];
    }
    chooseCell(character) {
      this.getNewDirections();
      return super.chooseCell(character);
      }
  whereGo() {
    var cell = [0, 1];
    var choose = random(cell);
    return choose;
  }
  mul() {
    const newCell = random(this.chooseCell(this.whereGo()));
    if (this.multiplay >= 5 && newCell) {
      const newhardgrass = new HardGrass(newCell[0], newCell[1]);
      matrix[newCell[1]][newCell[0]]=3;
      hardGrassArr.push(newhardgrass);
      this.multiplay = 0;
    }
    this.multiplay++;
  }
  move() {
    const choose = this.whereGo();
    const newCell = random(this.chooseCell(choose));
    if (this.slowness >= 15 && newCell) {
      const newX = newCell[0];
      const newY = newCell[1];
      matrix[this.y][this.x] = choose;
      matrix[newY][newX] = 3;
      this.x = newX;
      this.y = newY;
      this.slowness = 0;
      this.energy++;
    }
    this.slowness++;
    if (this.energy >= 20) {
      this.mul();
    }
  }
  minusHealth() {
    this.health--;
  }
}
