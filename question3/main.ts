export class Connect4 {
    grid: number[][];
    col: number;
    row: number;
    n: number; // player n
    finish: boolean; // true if game is finishes

    constructor() {
      this.col = 7,
      this.row = 6,
      this.n = 2, // switch to player 1 on play
      this.grid = new Array(this.col),
      this.finish = false;
      
      // 0 for empty spaces on the grid
      for (var i = 0; i < this.col; i++) {
        this.grid[i] = new Array(this.row);
        for (var j = 0; j < this.row; j++) {
          this.grid[i][j] = 0;
        }
      }
    }
  
    play(col: number): string{
      if (this.finish === true) {
        return("Game has finished!")
      }

      // top row of column not empty
      if (this.grid[col][0] != 0) {
        return("Column full!")
      }

      // switch player
      if (this.n === 1) {
        this.n = 2;
      }
      else {
        this.n = 1;
      }

      var j: number;
      // check for empty row
      for (j = this.row - 1; j >= 0; j--) {
        if (this.grid[col][j] === 0) {
          this.grid[col][j] = this.n;

          if (this.checkRow(col, j) || this.checkColumn(col, j) || this.checkDiagonal1(col, j) || this.checkDiagonal2(col, j)) {
            this.finish = true;
            return ("Player " + this.n + " wins!");
          }
          else {
            return ("Player " + this.n + " has a turn");
          }
        }
      }
    }

    // check if 4 in a row
    checkRow(col: number, row: number): boolean {
      var i: number,
      count = 1; // connect count

      // check right connects
      for (i = col + 1; i < this.col; i++) {
        if (this.grid[i][row] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      // check left connects
      for (i = col - 1; i >= 0; i--) {
        if (this.grid[i][row] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
      else {
        return false;
      }
    }

    // check if 4 in a column
    checkColumn(col: number, row: number): boolean {
      var j: number,
      count = 1; // connect count

      // check top connects
      for (j = row - 1; j >= 0; j--) {
        if (this.grid[col][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      // check bottom connects
      for (j = row + 1; j < this.row; j++) {
        if (this.grid[col][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
      else {
        return false;
      }
    }

    // check diagonal top right and bottom left connects
    checkDiagonal1(col: number, row: number): boolean {
      var i: number,
      j: number,
      count = 1; // connect count

      // check top right connects
      for (i = col + 1, j = row - 1; i < col && j >= 0; i++, j--) {
        if (this.grid[i][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      // check bottom left connects
      for (i = col - 1, j = row + 1; i >= 0 && j < row; i--, j++) {
        if (this.grid[i][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
      else {
        return false;
      }
    }

    // check diagonal top left and bottom right connects
    checkDiagonal2(col: number, row: number): boolean {
      var i: number,
      j: number,
      count = 1; // connect count

      // check top left connects
      for (i = col - 1, j = row - 1; i >= 0 && j >= 0; i--, j--) {
        if (this.grid[i][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      // check bottom right connects
      for (i = col + 1, j = row + 1; i < col && j < row; i++, j++) {
        if (this.grid[i][j] === this.n) {
          count++;
        }
        else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
      else {
        return false;
      }
    }
  }