class Grass extends Animals{
  mul() {
      let newCell = random(this.chooseCell(0));
      if (this.multiplay >= 4 && newCell) {
          let grass = new Grass(newCell[0], newCell[1]);
          matrix[newCell[1]][newCell[0]] = 1;
          grassArr.push(grass);
          this.multiplay = 0;
      }
      this.multiplay++;
    }
}
