export default class World {
  constructor(board, characters, items) {
    this.board = {};
    this.characters = {};
    this.items = {};
  }
}

// sandbox = {
//   1:{1:player, 2:basic, 3:treasure, 
//   2:{1:basic, 2:barrier, 3:barrier},
//   3:{1:monster, 2:barrier, 3:barrier}
// }