function generator(grass, grassEater, hardGrass, alleater, predator, wither) {
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
  }
  for (let i = 0; i < hardGrass; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=3;  
  }
  for (let i = 0; i < alleater; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = 20;
    matrix[y1][x1]=4;
  }
  for (let i = 0; i < predator; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=5;
  }
  for (let i = 0; i < wither; i++) {
    let x1 = Math.floor(Math.random() * (matrix.length - 1));
    let y1 = Math.floor(Math.random() * (matrix[0].length - 1));
    matrix[y1][x1]=6;
  }
}
