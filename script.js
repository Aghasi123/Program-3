
let socket=io();
const ashun = document.getElementById("ashun")
const dzmer = document.getElementById("dzmer")
const garun = document.getElementById("garun")
const amar = document.getElementById("amar")
const lightning=document.getElementById("lightning")
var side = 20;
function setup() {
  createCanvas(40 * side, 40 * side);
  background("#acacac");
}

function drawGame(matrix) {
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
      } else if (matrix[i][j] == 6) {
        fill("#333e4f");
      } else if (matrix[i][j] == 7) {
        fill("#333e4f");
      } else if (matrix[i][j] == 8) {
        fill("#087fc9");
      } else if (matrix[i][j] == 0) {
        fill("#acacac");
      }
      rect(j * side, i * side, side, side);
    }
  }
}

ashun.addEventListener("click",()=>{
  socket.emit("send signal", "ashun")
})
dzmer.addEventListener("click",()=>{
  socket.emit("send signal", "dzmer")
})
garun.addEventListener("click",()=>{
  socket.emit("send signal", "garun")
})
amar.addEventListener("click",()=>{
  socket.emit("send signal", "amar")
})
lightning.addEventListener("click",()=>{
  socket.emit("send lightning", true)
})
    // let x1 = Math.floor(Math.random() * (matrix.length - 1));
    // let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    // matrix[y1][x1] = 8;
    // let light=new Lightning();
    // light.create()
socket.on("send matrix", drawGame)
socket.on("send statistics", (statistics)=>{
  let grassData=document.getElementById("grassData");
  let grassEaterData=document.getElementById("grassEaterData");
  let hardGrassData=document.getElementById("hardGrassData");
  let allEaterData=document.getElementById("allEaterData");
  let predatorData=document.getElementById("predatorData");
  let witherData=document.getElementById("witherData");
  grassData.innerText=statistics.grassCount;
  grassEaterData.innerText=statistics.grassEaterCount;
  hardGrassData.innerText=statistics.hardGrassCount;
  allEaterData.innerText=statistics.allEaterCount;
  predatorData.innerText=statistics.predatorCount;
  witherData.innerText=statistics.witherCount;
})
