export default class Tile {
  constructor(hasBarrier, hasPlayer, hasMonster, hasItem){
    this.hasBarrier=hasBarrier; //false or object
    this.hasPlayer=hasPlayer; //false or object
    this.hasMonster=hasMonster; //false or object
    this.hasItem=hasItem; //false or object
    this.entities = {
      players: [],
      monsters: [],
      items: [],
    }
  }
  
  moveEntity(entity, moveDirection) {
    // 
    const name = entity.name; // get the entity's name
    const playersArray = (this.entities).players;

    for (i = 0; i < playersArray.length; i++) {
      // see if the item in the array matches the name searched for
      if (playersArray[i].name === name) {
        playersArray.pop();
        ((newTile.entities).players).push(entity);
      }
    }
    this.entities.players // is an array of players on this tile
  }

}

//let basic = new Tile(false, false, false, false)

