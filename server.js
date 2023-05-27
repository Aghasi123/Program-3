var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Grass = require("./classGrass.js");
var GrassEater = require("./classGrassEater");
var HardGrass = require("./classHardGrass");
var AllEater = require("./classAllEater");
var Predator = require("./classPredator");
var Wither = require("./classWither");
var Bullet = require("./classbullet");
var fs=require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);


matrix = [];
grassArr = [];
grassEaterArr = [];
hardGrassArr = [];
allEaterArr = [];
predatorArr = [];
witherArr = [];
bulletArr = [];


function generator(grass, grassEater, hardGrass, alleater, predator, wither, matrixSize) {
  for (let x = 0; x < matrixSize; x++) {
    matrix[x] = []
    for (let y = 0; y < 40; y++) {
      matrix[x].push(0);
    }
  }
  for (let i = 0; i < grass; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1] = 1;
  }
  for (let i = 0; i < grassEater; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1] = 2;
  }
  for (let i = 0; i < hardGrass; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1] = 3;
  }
  for (let i = 0; i < alleater; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = 20;
    matrix[y1][x1] = 4;
  }
  for (let i = 0; i < predator; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1] = 5;
  }
  for (let i = 0; i < wither; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1] = 6;
  }
  io.emit("send matrix", matrix);
}

generator(15, 10, 10, 5, 7, 3, 40);

function createObj() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y);
        grassArr.push(gr);
      }
      else if (matrix[y][x] == 2) {
        let eater = new GrassEater(x, y);
        grassEaterArr.push(eater);
      }
      else if (matrix[y][x] == 3) {
        let hardGrass = new HardGrass(x, y);
        hardGrassArr.push(hardGrass);
      }
      else if (matrix[y][x] == 4) {
        let allEater = new AllEater(x, y);
        allEaterArr.push(allEater);
      }
      else if (matrix[y][x] == 5) {
        let predator = new Predator(x, y);
        predatorArr.push(predator);
      }
      else if (matrix[y][x] == 6) {
        let wither = new Wither(x, y);
        witherArr.push(wither);
      }
      else if (matrix[y][x] == 7) {
        let bullet = new Bullet(x, y);
        bulletArr.push(bullet);
      }
    }
  }
}
createObj()
function playGame() {
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
  for (let i in witherArr) {
    witherArr[i].shot();
  }
  for (let i in bulletArr) {
    bulletArr[i].move();
  }

  io.emit("send matrix", matrix);
}
let speed=100
let id = setInterval(playGame, speed)


io.on("connection",function(socket){
  socket.on("send signal",(data)=>{
    if(data === "ashun" && speed!=300){
      clearInterval(id);
      speed = 300;
      setInterval(playGame,speed);
    }else if(data === "dzmer" && speed!=400){
      clearInterval(id);
      speed = 400;  
      setInterval(playGame,speed);
    }else if(data === "garun" && speed!=200){
      clearInterval(id);
      speed = 200;  
      setInterval(playGame,speed);
    }else if(data === "amar" && speed!=100){
      clearInterval(id);
      speed = 100;  
      setInterval(playGame,speed);
    }
    console.log(speed);
  })
  
setInterval(()=>{
  let statistics={
    grassCount:grassArr.length,
    grassEaterCount:grassEaterArr.length,
    hardGrassCount:hardGrassArr.length,
    allEaterCount:allEaterArr.length,
    predatorCount:predatorArr.length,
    witherCount:witherArr.length
  }
  // console.log(statistics);
  io.emit("send statistics",statistics);
  fs.writeFile("state.txt", JSON.stringify(statistics),(err)=>{
    if (err) {
      console.log(err);
    }
  })
  // console.log(speed);
},speed)



})
// console.log(speed);
