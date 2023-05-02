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
        []
 ];
 

var side = 20;
var grassArr= [];
var grassEaterArr=[];
var hardGrassArr=[];
var allEaterArr=[];
var predatorArr=[];

function setup() {
   generator(25,25,5,7,25);
   frameRate(15);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
//    for (let x = 0; x < matrix.length; x++) {
//     for (let y = 0; y < matrix[0].length; y++) {
//         if (matrix[x][y]==1) {
//             new Grass(x,y);
//         }
        
//     }
// } 
//  for (let x = 0; x < matrix.length; x++) {
//     for (let y = 0; y < matrix[0].length; y++) {
//         if (matrix[x][y]==2) {
//             new GrassEater(x,y);
//         }
        
//     }
//}
   console.log(matrix);
}

function draw(){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            
            if (matrix[i][j]==1) {
                fill("green");
            }else if(matrix[i][j] == 2){
                fill("yellow");
            }else if(matrix[i][j] == 3){
                fill("#916d09");
            }else if(matrix[i][j] == 4){
                fill("black");
            }else if(matrix[i][j] == 5){
                fill("red");
            }else if (matrix[i][j] == 0) {
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
