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

  test ('we should be able to access the details for a player that is on the tile' ,()=> {
    const trog= {
      name: "trog",
    }
    const newTile = new Tile(false, trog, false, false );
    expect(newTile.hasPlayer.name).toEqual("trog");
  });

  test ('we should be able to push a player-object onto a tile player-array' , ()=> {
    const trog = {
      name: "trog",
    }
    const newTile = new Tile(false, false, false, false);
    ((newTile.entities).players).push(trog);
    expect((newTile.entities).players[0]).toEqual(trog);
  });
});