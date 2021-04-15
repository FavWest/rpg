import Tile from '../src/js/tile.js';
import World from '../src/js/world.js';
import Map from '../src/js/map.js';

describe ('World', () => {
  let board;
  let world1;
  let trog; //we can't count on Trog after all :(

  beforeEach(() => {
    board=[[new Tile(true, false, false, false),
      new Tile(false, false, false, false),
      new Tile(false, false, false, false),],
      [new Tile(true, false, false, false),
        new Tile(false, false, false, false),
        new Tile(false, false, false, false),]]
    trog = {
      name: "trog",
    }
    world1 = new World(board);
  });

  test ('should create a World object with a board property', () => {
    expect (world1.board[0][0].hasBarrier).toEqual(true);
  });

  test ('should find the location of the specified object', () => {
    (world1.board[0][1]).entities.players.push(trog);
    expect (world1.findLocation(trog)).toEqual([0,1]);
  });
  test ('moveRight() should move the player one tile to the right', () => {
    (world1.board[0][1].entities).players.push(trog);
    world1.moveRight();
    expect ((world1.board[0][2].entities).players.name).toEqual("trog");
  });
});