export default class Character {
  constructor (name, role, level, physical, mental, hp, inventory){
    this.name=name;
    this.role=role;
    this.level=level;
    this.physical=physical;
    this.mental=mental;
    this.hp=hp;
    this.inventory={};

  //let myFighter = new Character("Trog", "Warrior", 1, 3, 2, 10, {skills: ["climb"], weapons: ["plain sword"]}); //(name, class, level, physical, mental, hp, inventory)
}
}

