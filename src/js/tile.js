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
}

//let basic = new Tile(false, false, false, false)

