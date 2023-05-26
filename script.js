let socket=io();
const ashun = document.getElementById("ashun")
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
