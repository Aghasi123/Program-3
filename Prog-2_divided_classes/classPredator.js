class Predator extends Animals{
  constructor(x, y) {
    super(x,y)
    this.energy = 18;
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
    var cell = [1, 2, 3];
    var choose = random(cell);
    return choose;
  }
  eat() {
    const eatCells = random(this.chooseCell(1));
    const eatGrassEater = random(this.chooseCell(2));
    const eatHardGrass = random(this.chooseCell(3));
    if (eatCells && this.whateat() == 1) {
      const newX = eatCells[0];
      const newY = eatCells[1];
      matrix[newY][newX] = 5;
      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      this.energy++;
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
        if (this.energy >= 30) {
          this.mul();
        }
      }
    } else if (eatGrassEater && this.whateat() == 1) {
      const newX = eatGrassEater[0];
      const newY = eatGrassEater[1];
      matrix[newY][newX] = 5;
      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      this.energy++;
      for (var i in grassEaterArr) {
        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);
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
            console.log(hardGrassArr[i].health);
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            hardGrassArr.splice(i, 1);
            break;
          }
          break;
        }
        if (this.energy >= 80) {
          this.mul();
        }
      }
    } else {
      this.move();
    }
  }
  mul() {
    const newCell = random(this.chooseCell(0));
    if (this.multiplay >= 15 && newCell) {
      const newPredator= new Predator(newCell[0], newCell[1]);
      matrix[newCell[1]][newCell[0]]=5;
      predatorArr.push(newPredator);
      this.multiplay = 0;
    }
    this.multiplay++;
  }

  move() {
    const newCell = random(this.chooseCell(0));
    if (newCell) {
      const newX = newCell[0];
      const newY = newCell[1];
      matrix[newY][newX] = 5;
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
    for (var i in predatorArr) {
      if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
        predatorArr.splice(i, 1);
        break;
      }
    }
  }
}
