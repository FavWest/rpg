import Tile from '../src/js/tile.js';
import World from '../src/js/world.js';
import Map from '../src/js/map.js';

describe ('World', () => {
  let board;
  let world1;
  let trog; //we can't count on Trog after all :(

  beforeEach(() => {
    board=[new Tile(true, false, false, false),
      new Tile(false, false, false, false),
      new Tile(false, false, false, false),]
    trog = {
      name: "trog",
    }
    world1 = new World(board);
  });

  test ('should create a World object with a board property', () => {
    expect (world1.board[0].hasBarrier).toEqual(true);
  });

  test ('moveRight() should move the player one tile to the right', () => {
    (world1.board[1].entities).players.push(trog);
    world1.moveRight();
    expect ((world1.board[2].entities).players.name).toEqual("trog");
  });
});