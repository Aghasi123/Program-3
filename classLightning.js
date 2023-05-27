const Animals=require("./classAnimals.js");
module.exports=class Lightning extends Animals{
    constructor(x,y){
        super(x,y);
        this.length=0
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
    create(){
     
        // matrix[y1][x1] = 8;
   
            // console.log(this.length);
            
            this.getNewDirections()
            let x = this.directions[5][0]
            let y = this.directions[5][1]
            if (
                x >= 0 &&
                x < matrix[0].length &&
                y >= 0 &&
                y < matrix.length
              ){
                     matrix[y][x]=8;
                    matrix[this.y][this.x]=0;
                    this.x = x 
                    this.y = y
              }
              else{
                matrix[this.y][this.x]=0;
              }

              
 
    }
}