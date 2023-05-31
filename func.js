module.exports=(char,x,y)=>{
    switch (char) {
        case 0:break;
        case 1:
            for (let i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                  grassArr.splice(i, 1);
                  break;
                }
              }
        case 2:
            for (let i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                  break;
                }
              }
        case 3:
            for (let i in hardGrassArr) {
                if (x == hardGrassArr[i].x && y == hardGrassArr[i].y) {
                    hardGrassArr.splice(i, 1);
                  break;
                }
              }
        case 4:
            for (let i in allEaterArr) {
                if (x == allEaterArr[i].x && y == allEaterArr[i].y) {
                    allEaterArr.splice(i, 1);
                  break;
                }
              }
        case 5:
            for (let i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                  break;
                }
              }
        case 6:
            for (let i in witherArr) {
                if (x == witherArr[i].x && y == witherArr[i].y) {
                    witherArr.splice(i, 1);
                  break;
                }
              }
        default:break;
    }
}