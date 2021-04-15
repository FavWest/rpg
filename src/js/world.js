export default class World {
  constructor(board, characters, items) {
    this.board = board;
    this.characters = {};
    this.items = {};
  }

  findLocation(entity) {
    let coordinates = [];
    for (let i = 0; i < (this.board).length; i++) {
      for (let j = 0; j < (this.board[i]).length; j++) {
        if (this.board[i][j] === entity) {
          coordinates = [i, j];
          return coordinates;
        } else {
          return "NOPE";
        }
      }
    }
  }

  moveRight(){

  }
}

// sandbox = {
//   1:{1:player, 2:basic, 3:treasure, 
//   2:{1:basic, 2:barrier, 3:barrier},
//   3:{1:monster, 2:barrier, 3:barrier}
// }