import Example from '../src/js/example.js';
import Character from '../src/js/character.js';

describe('Example', () => {
  test ('should create an Example', () => {
    let example = new Example(5)
    expect(example.number).toEqual(5);
  });
});

describe('Character', () => {
  test ('should create a Character object', () => {
    let myFighter = new Character("Trog", "Warrior", 1, 3, 2, 10, {skills: ["climb"], weapons: ["plain sword"]}); //(name, role, level, physical, mental, hp, inventory)
    expect(myFighter.name).toEqual("Trog");
    expect(myFighter.role).toEqual("Warrior");
    expect(myFighter.level).toEqual(1);
    expect(myFighter.physical).toEqual(3);
    expect(myFighter.mental).toEqual(2);
    expect(myFighter.hp).toEqual(10);
    expect(myFighter.inventory.skills).toEqual(["climb"]);
    expect(myFighter.inventory.weapons).toEqual(["plain sword"]);
  });

  test ('should return a value equal to physical for attack damage', () => {
    let myFighter = new Character("Trog", "Warrior", 1, 3, 2, 10, {skills: ["climb"], weapons: ["plain sword"]});
    expect(myFighter.physicalAttack()).toEqual(3);
  });

  test ('should return a value equal to mental for attack damage', () => {
    let myFighter = new Character("Trog", "Warrior", 1, 3, 2, 10, {skill: ["climb"], weapons: ["plain sword"]});
    expect(myFighter.mentalAttack()).toEqual(2);
  })
  // test ('should return a value equal to mental for attack damage', () => {
  //   let myFighter = new Character("Minx", "Mage", 1, 1, 4, 8, {skill: ["Hover/float"], weapons: ["apprentice staff"]});
  //   expect(myFighter.mentalAttack()).toEqual(4);
  // })

});