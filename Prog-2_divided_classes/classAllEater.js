class AllEater extends Animals{
  constructor(x, y) {
    super(x,y)
    this.multiplay = 0;
    this.directions = [];
  }
  getNewDirections() {
    this.directions = [
      [this.x, this.y + 1],
      [this.x, this.y - 1],
    ];
  }
  downDirections() {
    this.getNewDirections();
    var x = this.directions[0][0];
    var y = this.directions[0][1];
    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
      var down = this.directions[0];
    }
    return down;
  }
  upDirections() {
    this.getNewDirections();
    var x = this.directions[1][0];
    var y = this.directions[1][1];
    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
      var up = this.directions[1];
    }
    return up;
  }
  chooseWay() {
    var way = [0, 1];
    var choose = random(way);
    return choose;
  }
  shot() {
    const down = this.downDirections();
    const up = this.upDirections();
    const choose = this.chooseWay();
    if (down && choose == 0) {
      var newX = down[0];
      var newY = down[1];
      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      for (let i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      for (var i in grassEaterArr) {
        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);
          break;
        }
      }
      for (var i in hardGrassArr) {
        if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
          hardGrassArr.splice(i, 1);
          break;
        }
      }
    }
    if (up && choose == 1) {
      var newX = up[0];
      var newY = up[1];
      matrix[newY][newX] = 4;
      matrix[this.y][this.x] = 0;
      this.x = newX;
      this.y = newY;
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      for (var i in grassEaterArr) {
        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);
          break;
        }
      }
      for (var i in hardGrassArr) {
        if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
          hardGrassArr.splice(i, 1);
          break;
        }
      }
      for (var i in predatorArr) {
        if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
          predatorArr.splice(i, 1);
          break;
        }
      }
    }
  }
}
