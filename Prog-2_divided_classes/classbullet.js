class Bullet extends Wither{
    constructor(x,y,direction){
        super(x,y);
        this.direction=direction;
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
    way(character){
        this.getNewDirections();
        var found;
        var x=this.directions[this.direction][0];
        var y=this.directions[this.direction][1];
        if (
            x >= 0 && 
            x < matrix[0].length &&
            y >= 0 &&
            y < matrix.length &&
            matrix[y][x] == character
        ){
            found=this.directions[this.direction];
        }
        return found        
    }
    theEnd(){
        this.getNewDirections();
        var t=false;
        var x=this.directions[this.direction][0];
        var y=this.directions[this.direction][1];
        if (
            x <= 0 || 
            x >= matrix[0].length ||
            y <= 0 ||
            y >= matrix.length
           ) {
            t=true;
        }
        return t;
    }
    move(){
        const newCell = this.way(0);
        const grass=this.way(1);
        const grassEater=this.way(2);
        const hardGrass=this.way(3);
        const allEater=this.way(4);
        const predator=this.way(5);
        const theEnd=this.theEnd();
        if (newCell) {
            const newX = newCell[0];
            const newY = newCell[1];
            matrix[newY][newX] = 7;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        if (grass) {
            var newX = grass[0];
            var newY = grass[1];
            matrix[newY][newX] = 7;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                  grassArr.splice(i, 1);
                  break;
                }
              }
        }
        if(theEnd){
            console.log("you reached to the end");
            matrix[this.y][this.x] = 0;
            for (var i in bulletArr) {
                if (this.x == bulletArr[i].x && this.y == bulletArr[i].y) {
                    bulletArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    
}