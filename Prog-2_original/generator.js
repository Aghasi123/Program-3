function generator(grass, grassEater, hardGrass, alleater, predator) {
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < 40; y++) {
            matrix[x].push(0);
        }
    }
    for (let i = 0; i < grass; i++) {
        let x1=Math.floor(Math.random() * (matrix.length-1));
        let y1=Math.floor(Math.random() * (matrix[0].length-1));
        new Grass(x1,y1);
    }
    for (let i = 0; i < grassEater; i++) {
        let x1=Math.floor(Math.random() * (matrix.length-1));
        let y1=Math.floor(Math.random() * (matrix[0].length-1));
        new GrassEater(x1,y1);
    }
    for (let i = 0; i < hardGrass; i++) {
        let x1=Math.floor(Math.random() * (matrix.length-1));
        let y1=Math.floor(Math.random() * (matrix[0].length-1));
        new HardGrass(x1,y1);
    }
    for (let i = 0; i < alleater; i++) {
        let x1=Math.floor(Math.random() * (matrix.length-1));
        let y1=20;
        new AllEater(x1,y1);
    }
    for (let i = 0; i < predator; i++) {
        let x1=Math.floor(Math.random() * (matrix.length-1));
        let y1=Math.floor(Math.random() * (matrix[0].length-1));
        new Predator(x1,y1);
    }
}