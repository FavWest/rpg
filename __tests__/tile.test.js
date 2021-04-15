import Tile from '../src/js/tile.js';

describe('Tile', () => {
  //declare variables

  beforeEach(() => {
    //do stuff
  });
  test ('should create a Tile object with a player', () => {
    const newTile = new Tile(false, true, false, false);
    expect(newTile.hasBarrier).toEqual(false);
    expect(newTile.hasPlayer).toEqual(true);
    expect(newTile.hasMonster).toEqual(false);
    expect(newTile.hasItem).toEqual(false);
  });

});