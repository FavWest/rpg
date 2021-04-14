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
  }
  physicalAttack() {
    return this.physical;
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
      damage -= target.physical;
    } else {
      damage -= target.mental;
    }
    target.lowerCurrentHP(damage);
    return damage;
  }
};