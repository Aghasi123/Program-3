class GrassEater  extends Animals{
  constructor(x, y){
    super(x, y);
    this.energy = 15;
    this.multiplay = 0;
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
  whateat() {
    var cell = [1, 3];
    var choose = random(cell);
    return choose;
  }
  eat() {
    const eatCells = random(this.chooseCell(1));
    const eatHardGrass = random(this.chooseCell(3));
    if (eatCells && this.whateat() == 1) {
      const newX = eatCells[0];
      const newY = eatCells[1];
      matrix[newY][newX] = 2;

      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      this.energy++;
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          //console.log("BEFORE",grassArr[i]);
          grassArr.splice(i, 1);

          //console.log("AFTER",grassArr[i]);
          break;
        }
        if (this.energy >= 30) {
          this.mul();
        }
      }
    } else if (eatHardGrass && this.whateat() == 3) {
      const newX = eatHardGrass[0];
      const newY = eatHardGrass[1];
      for (var i in hardGrassArr) {
        if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
          hardGrassArr[i].minusHealth();
          if (hardGrassArr[i].health <= 0) {
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            hardGrassArr.splice(i, 1);
            break;
          }
          break;
        }
        if (this.energy >= 30) {
          this.mul();
        }
      }
    } else {
      this.move();
    }
  }
  mul() {
    let newCell = random(this.chooseCell(0));
    if (this.multiplay >= 15 && newCell) {   
      let newGrassEater = new GrassEater(newCell[0], newCell[1]);
      matrix[newCell[1]][newCell[0]]=2;
      grassEaterArr.push(newGrassEater);
      this.multiplay = 0;
    }
    this.multiplay++;
  }

  move() {
    const newCell = random(this.chooseCell(0));
    if (newCell) {
      const newX = newCell[0];
      const newY = newCell[1];
      matrix[newY][newX] = 2;
      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      this.energy--;
    }
    if (this.energy <= 0) {
      this.die();
    }
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (var i in grassEaterArr) {
      if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
        grassEaterArr.splice(i, 1);
        break;
      }
    }
  }
}
