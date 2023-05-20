const Animals=require("./classAnimals.js");
module.exports=class Wither extends Animals{
  constructor(x,y){
    super(x,y);
    this.delay=0;
  }
    shot(){
      if (this.delay>50) {
        for (let i = 0; i < this.directions.length; i++) {
          if (matrix[this.directions[i][1]][this.directions[i][0]]) {
            // console.log(this.directions[i]);
            let newBullet = new Bullet(this.directions[i][0], this.directions[i][1], i);
            matrix[this.directions[i][1]][this.directions[i][0]]=7;
            bulletArr.push(newBullet);
          }
        } 
        this.delay=0;
      }
      this.delay++;
    }
}