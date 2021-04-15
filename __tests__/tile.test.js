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

  test ('should push a player-object onto a tile player-array' , ()=> {
    const trog = {
      name: "trog",
    }
    const newTile = new Tile(false, false, false, false);
    ((newTile.entities).players).push(trog);
    expect((newTile.entities).players[0]).toEqual(trog);
  });
  
  test ('should pop a player-object off of a tile player-array' , () => {
    
    const trog = {
      name: "trog",
    }
    const ugg = {
      name: "Ugg"
    }
    const newTile = new Tile(false, false, false, false);
    ((newTile.entities).players).push(ugg);
    ((newTile.entities).players).push(trog);
    ((newTile.entities).players).pop();
    expect ((newTile.entities).players).toEqual([ugg])
  });

  // test ('should move player from one tile to another' , () => {
  //   const leftTile = new Tile(false, false, false, false);
  //   const rightTile = new Tile(false, false, false, false);
  //   const gameBoard = new World([leftTile, rightTile]);

  //   const trog = { name: "trog" };

  //   ((leftTile.entities).players).push(trog);
  //   leftTile.moveEntity(trog, "right");
  //   expect ((rightTile.entities).players[0]).toEqual(trog);
  // });
});