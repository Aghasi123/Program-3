class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
        grassArr.push(this);
        matrix[y][x] = 1;
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 4 && newCell) {
            new Grass(newCell[0], newCell[1]);
            this.multiplay = 0;
        }
        this.multiplay++;
    }
}

class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 15;
        this.multiplay = 0;
        this.directions = [];
        grassEaterArr.push(this);
        matrix[y][x] = 2;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    whateat(){
        var cell=[1,3];
        var choose=random(cell);
        return choose;
    }
    eat() {
        const eatCells = random(this.chooseCell(1));
        const eatHardGrass = random(this.chooseCell(3));
        if (eatCells && this.whateat()==1) {
            const newX = eatCells[0];
            const newY = eatCells[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }
            }
            

        }
        else if(eatHardGrass && this.whateat()==3){
        const newX = eatHardGrass[0];
        const newY = eatHardGrass[1];
            for (var i in hardGrassArr) {
                if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
                    hardGrassArr[i].minusHealth();
                    if (hardGrassArr[i].health<=0) {
                        matrix[newY][newX] = 2;
                        matrix[this.y][this.x] = 0;
                        this.x = newX;
                        this.y = newY;
                        this.energy++;
                        hardGrassArr.splice(i,1)
                        break;
                        }
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }

            }
            
        }
        else {
            this.move();
        }


    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 15 && newCell) {
            const newGrassEater = new GrassEater(newCell[0], newCell[1]);
            this.multiplay = 0;
        }
        this.multiplay++
    }

    move() {
        const newCell = random(this.chooseCell(0));
        if (newCell) {
            const newX = newCell[0];
            const newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
        if (this.energy <= 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
class Predator{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 18;
        this.multiplay = 0;
        this.directions = [];
        predatorArr.push(this);
        matrix[y][x] = 5;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    whateat(){
        var cell=[1,2,3];
        var choose=random(cell);
        return choose;
    }
    eat() {
        const eatCells = random(this.chooseCell(1));
        const eatGrassEater = random(this.chooseCell(2));
        const eatHardGrass = random(this.chooseCell(3));
        if (eatCells && this.whateat()==1) {
            const newX = eatCells[0];
            const newY = eatCells[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }
            }
            

        }else if (eatGrassEater && this.whateat()==1) {
            const newX = eatGrassEater[0];
            const newY = eatGrassEater[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy++;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
                if (this.energy >= 30) {
                    this.mul();
                }
            }
            

        }else if(eatHardGrass && this.whateat()==3){
        const newX = eatHardGrass[0];
        const newY = eatHardGrass[1];
            for (var i in hardGrassArr) {
                if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
                    hardGrassArr[i].minusHealth();
                    if (hardGrassArr[i].health<=0) {
                    console.log(hardGrassArr[i].health);
                        matrix[newY][newX] = 5;
                        matrix[this.y][this.x] = 0;
                        this.x = newX;
                        this.y = newY;
                        this.energy++;
                        hardGrassArr.splice(i,1)
                        break;
                        }
                    break;
                }
                if (this.energy >= 80) {
                    this.mul();
                }

            }
            
        }
        else {
            this.move();
        }


    }
    mul() {
        const newCell = random(this.chooseCell(0));
        if (this.multiplay >= 15 && newCell) {
            const newGrassEater = new Predator(newCell[0], newCell[1]);
            this.multiplay = 0;
        }
        this.multiplay++
    }

    move() {
        const newCell = random(this.chooseCell(0));
        if (newCell) {
            const newX = newCell[0];
            const newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
         if (this.energy <= 0) {
             this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}

class HardGrass{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.energy=10;
        this.health=20;
        this.slowness=0;
        this.previousCharacter=0;
        this.wannaDestroy=0;
        this.directions = [];
        hardGrassArr.push(this);
        matrix[y][x] = 3;
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
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                    found.push(this.directions[i]);
            }
        }
        return found;
    }
    whereGo(){
        var cell=[0,1];
        var choose=random(cell);
        return choose;
    }
    mul() {
        const newCell = random(this.chooseCell(this.whereGo()));
        if (this.multiplay >= 10 && newCell) {
            const newhardgrass = new HardGrass(newCell[0], newCell[1]);
            this.multiplay = 0;
        }
        this.multiplay++
    }
    move() {
        const choose = this.whereGo();
        const newCell = random(this.chooseCell(choose));
        if (this.slowness >= 15 && newCell) {
            const newX = newCell[0];
            const newY = newCell[1];
            matrix[this.y][this.x] = choose;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
            this.slowness=0;
            this.energy++;
        }
        this.slowness++;
        if (this.energy >= 20) {
            this.mul();
        }
        // if (this.wannaDestroy>=100) {
        //     const choose = this.getDestoryDirections();
        //         for (let a = 0; a < choose.length; a++) {
                    
        //             matrix[choose[a][1]][choose[a][0]]=0;
                
        //             for (let j in grassArr) {
        //                 if (choose[a][0]== grassArr[j].x && choose[a][1] == grassArr[j].y) {
        //                     grassArr.splice(j, 1);
        //                     break;
        //                 }
        //             }
        //             for (let j in grassEaterArr) {
        //                 if (choose[a][0] == grassEaterArr[j].x && choose[a][1] == grassEaterArr[j].y) {
        //                     grassEaterArr.splice(j, 1);
        //                     break;
        //                 }
        //             }
        //             for (let j in hardGrassArr) {
        //                 if (choose[a][0] == hardGrassArr[j].x && choose[a][1] == hardGrassArr[j].y) {
        //                     hardGrassArr.splice(j, 1);
        //                     break;
        //                 }  
        //             }  
        //         this.wannaDestroy=0;
        //         }
                    
        // }
        // this.wannaDestroy++;
        
    }
            // let choose = this.previousCharacter;
            // const newX = newCell[0];
            // const newY = newCell[1];
            // this.previousCharacter=matrix[newY][newX];
            // matrix[newY][newX] = 3;
            // matrix[this.y][this.x] = choose;
    
    // die() {
    //     matrix[this.y][this.x] = 0;
    //     for (var i in hardGrassArr) {
    //         if (this.x == hardGrassArr[i].x && this.y == hardGrassArr[i].y) {
    //             hardGrassArr.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
    minusHealth(){
        this.health--;
    }
    // getHealth(){
    //     const health=this.health;
    //     return health;
    // }
}
class AllEater{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.directions = [];
        allEaterArr.push(this);
        matrix[y][x] = 4;
    }
    getNewDirections() {
        this.directions = [
            [this.x, this.y + 1],
            [this.x, this.y - 1]
        ];
    }
    downDirections(){
        this.getNewDirections();
            var x = this.directions[0][0];
            var y = this.directions[0][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    var down =this.directions[0];
            }
        return down;
    }
    upDirections(){
        this.getNewDirections();
            var x = this.directions[1][0];
            var y = this.directions[1][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                     var up = this.directions[1];
            }
        return up;
    }
    chooseWay(){
        var way = [0,1];
        var choose = random(way)
        return choose;
    }
    shot(){
        const down=this.downDirections();
        const up=this.upDirections();
        const choose=this.chooseWay();
        if (down && choose==0) {
                var newX=down[0];
                var newY=down[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x]=0;
                this.x = newX;
                this.y = newY;
                for (let i in grassArr) {
                     if (newX == grassArr[i].x && newY == grassArr[i].y) {
                         grassArr.splice(i, 1);
                         break;
                     }
                }
                for (var i in grassEaterArr) {
                     if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                         grassEaterArr.splice(i, 1);
                         break;
                     }
                }
                for (var i in hardGrassArr) {
                     if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
                         hardGrassArr.splice(i, 1);
                         break;
                     }  
                }
        }  
        if (up && choose==1) {
        var newX=up[0];
        var newY=up[1];
        matrix[newY][newX] = 4;
        matrix[this.y][this.x]=0;
        this.x = newX;
        this.y = newY;
        for (var i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
            }
        }
        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
            }
        }
        for (var i in hardGrassArr) {
                if (newX == hardGrassArr[i].x && newY == hardGrassArr[i].y) {
                    hardGrassArr.splice(i, 1);
                    break;
                }  
        }
        for (var i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }  
    }  
      }   
        
    }
}
