var matrix = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

var side = 20;
var grassArr = [];
var grassEaterArr = [];
var hardGrassArr = [];
var allEaterArr = [];
var predatorArr = [];

function setup() {
  generator(5, 25, 0, 0, 0);
  frameRate(15);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] == 1){
            let gr = new Grass(x, y);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2){
            let eater = new GrassEater(x, y);
            grassEaterArr.push(eater);
        }
        else if (matrix[y][x] == 3){
            let hardGrass = new HardGrass(x, y);
            hardGrassArr.push(hardGrass);
        }
        else if (matrix[y][x] == 4){
            let allEater = new AllEater(x, y);
            allEaterArr.push(allEater);
        }
        else if (matrix[y][x] == 5){
            let predator = new Predator(x, y);
            predatorArr.push(predator);
        }
    }
}
}

function draw() {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        fill("green");
      } else if (matrix[i][j] == 2) {
        fill("yellow");
      } else if (matrix[i][j] == 3) {
        fill("#916d09");
      } else if (matrix[i][j] == 4) {
        fill("black");
      } else if (matrix[i][j] == 5) {
        fill("red");
      } else if (matrix[i][j] == 0) {
        fill("#acacac");
      }
      rect(j * side, i * side, side, side);
    }
  }




  for (let i in grassArr) {
    grassArr[i].mul();
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat();
  }
  for (let i in hardGrassArr) {
    hardGrassArr[i].move();
  }
  for (let i in allEaterArr) {
    allEaterArr[i].shot();
  }
  for (let i in predatorArr) {
    predatorArr[i].eat();
  }
}
