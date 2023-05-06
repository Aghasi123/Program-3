function generator(grass, grassEater, hardGrass, alleater, predator) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < 40; y++) {
      matrix[x].push(0);
    }
  }
  for (let i = 0; i < grass; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=1;
  }
  for (let i = 0; i < grassEater; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=2;
    // let ge=new GrassEater(x1, y1);
    // grassEaterArr.push(ge);
  }
  for (let i = 0; i < hardGrass; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=3;
    // let hg=new HardGrass(x1, y1);
    // hardGrassArr.push(hg);    
  }
  for (let i = 0; i < alleater; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = 20;
    matrix[y1][x1]=4;
    // let ae=new AllEater(x1, y1);
    // allEaterArr.push(ae);
  }
  for (let i = 0; i < predator; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=5;
    // let pr=new Predator(x1, y1);
    // predatorArr.push(pr)
  }
}
