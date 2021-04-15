export default class Character {
  constructor (name, role, level, physical, mental, hp, inventory) {
    this.name=name;
    this.role=role;
    this.level=level;
    this.physical=physical;
    this.mental=mental;
    this.currentHP=hp;
    this.maxHP=hp;
    this.inventory=inventory;
    this.equippedArmor = 0;
    this.physicalDmgBonus = 0;
  }

  physicalAttack() {
    let damage=this.physical + this.physicalDmgBonus; // + this.physicalDmgBonus
    //this.attack(target, "physical", damage);
    return damage;
  }

  mentalAttack() {
    return this.mental;
  }

  lowerCurrentHP(damage) {
    this.currentHP -= damage;
    return this.currentHP;
  }
  
  raiseCurrentHP(heal) {
    if (this.currentHP + heal > this.maxHP) {
      this.currentHP = this.maxHP;
    } else {
      (this.currentHP += heal);
    }
    return this.currentHP;
  }

  attack(target, attackType, damage) {
    if (attackType==="physical"){
      damage -= target.physical; // + target.physicalDefBonus
    } else {
      damage -= target.mental; // + target.mentalDefBonus
    }
    target.lowerCurrentHP(damage);
    return damage;
  }
};