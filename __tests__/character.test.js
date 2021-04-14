import Character from '../src/js/character.js';

describe('Character', () => {
  let myFighter;
  
  beforeEach(() => {
    myFighter = new Character("Trog", "Warrior", 1, 3, 2, 10, {skills: ["climb"], weapons: ["plain sword"]});
  });
  
  test ('should create a Character object', () => {
    expect(myFighter.name).toEqual("Trog");
    expect(myFighter.role).toEqual("Warrior");
    expect(myFighter.level).toEqual(1);
    expect(myFighter.physical).toEqual(3);
    expect(myFighter.mental).toEqual(2);
    expect(myFighter.currentHP).toEqual(10);
    expect(myFighter.maxHP).toEqual(10);
    expect(myFighter.inventory.skills).toEqual(["climb"]);
    expect(myFighter.inventory.weapons).toEqual(["plain sword"]);
  });

  test ('should return a value equal to physical for attack damage', () => {
    expect(myFighter.physicalAttack()).toEqual(3);
  });

  test ('should return a value equal to mental for attack damage', () => {
    expect(myFighter.mentalAttack()).toEqual(2);
  });
  test ('should return the hp value of the character' , () => {
    expect(myFighter.currentHP).toEqual(10);
  })
  test ('should lower currentHP and return the new currentHP' , () => {
    expect(myFighter.lowerCurrentHP(3)).toEqual(7);
  })
  // test ('shoud change hp property based on damage taken', () => {
    
  // })
  // test ('should return a value equal to mental for attack damage', () => {
  //   let myFighter = new Character("Minx", "Mage", 1, 1, 4, 8, {skill: ["Hover/float"], weapons: ["apprentice staff"]});
  //   expect(myFighter.mentalAttack()).toEqual(4);
  // })

});