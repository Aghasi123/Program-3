module.exports=class Animals {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 3;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
          var found = [];
          for (let i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (
              x >= 0 &&
              x < matrix[0].length &&
              y >= 0 &&
              y < matrix.length &&
              matrix[y][x] == character
            ) {
              found.push(this.directions[i]);
            }
          }
          return found;
    }
    random(arr){
      let result=Math.floor(Math.random()*arr.length);
      return arr[result];
    }
}