const Animals = require("./classAnimals.js");
const func=require("./func.js");
module.exports = class Lightning extends Animals {
  constructor(x, y) {
    super(x, y);
    this.length = 0;
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
  create() {
    this.getNewDirections();
    let x = this.directions[5][0];
    let y = this.directions[5][1];
    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
      if(matrix[y][x]==0){
        matrix[y][x] = 8;
        matrix[this.y][this.x] = 0;
        this.x = x;
        this.y = y;
      }else{
          let char=matrix[y][x];
          matrix[y][x] = 8;
          matrix[this.y][this.x] = 0;
          this.x = x;
          this.y = y;
          func(char,x,y);
          // for (let i in grassArr) {
          //   if (x == grassArr[i].x && y == grassArr[i].y) {
          //     grassArr.splice(i, 1);
          //     break;
          //   }
          // }
      }
    } else {
      matrix[this.y][this.x] = 0;
      return "null";
    }
  }
};
