export default class Character {
  constructor (name, role, level, physical, mental, hp, inventory){
    this.name=name;
    this.role=role;
    this.level=level;
    this.physical=physical;
    this.mental=mental;
    this.currentHP=hp;
    this.maxHP=hp;
    this.inventory=inventory;
  }

  physicalAttack(){
    return this.physical;
  }
  mentalAttack(){
    return this.mental;
  }
  lowerCurrentHP(){

  }
}