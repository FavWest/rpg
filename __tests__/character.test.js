import Character from './../src/js/character.js';

describe('Character', () => {
    let myFighter;
    let slime;

    beforeEach(() => {
        myFighter = new Character("Trog", "warrior", 1, 3, 2, 10, { skills: ["climb"], weapons: ["plain sword"] });
        slime = new Character("Slime", "slime", 1, 1, 1, 5, {});
    });

    test('should create a Character object', () => {
        expect(myFighter.name).toEqual("Trog");
        expect(myFighter.role).toEqual("warrior");
        expect(myFighter.level).toEqual(1);
        expect(myFighter.physical).toEqual(3);
        expect(myFighter.mental).toEqual(2);
        expect(myFighter.currentHP).toEqual(10);
        expect(myFighter.maxHP).toEqual(10);
        expect(myFighter.inventory.skills).toEqual({ "acrobatics": false, "climb": false, "diplomacy": false, "dual wield": false, "fly": false, "heal": false, "intimidate": false, "perception": false, "steal": false, "stealth": false, "swim": false });
        expect(myFighter.inventory.weapons).toEqual([]);
    });

    test('should return a value equal to physical for attack damage', () => {
        expect(myFighter.physicalAttack()).toEqual(3);
    });

    test('should return a value equal to mental for attack damage', () => {
        expect(myFighter.mentalAttack()).toEqual(2);
    });
    test('should return the hp value of the character', () => {
        expect(myFighter.currentHP).toEqual(10);
    });
    test('should lower currentHP and return the new currentHP', () => {
        expect(myFighter.lowerCurrentHP(3)).toEqual(7);
    });
    test('should raise currentHP and return the new currentHP', () => {
        myFighter.maxHP = (14);
        expect(myFighter.raiseCurrentHP(3)).toEqual(13);
    });
    test('raiseCurrentHP() should not raise currentHP to exceed maxHP', () => {
        myFighter.currentHP = (9);
        expect(myFighter.raiseCurrentHP(3)).toEqual(10);
    });

    test('one character should be able to attack another, lowering their HP', () => {
        myFighter.physical = 0;
        slime.attack(myFighter, "physical", 1);
        expect(myFighter.currentHP).toEqual(9);
    });

    test('the physical property should reduce incoming damage from a physical attack', () => {
        slime.attack(myFighter, "physical", 5);
        expect(myFighter.currentHP).toEqual(8);
    });

    test('the mental property should reduce incoming damage from a mental attack', () => {
        slime.attack(myFighter, "mental", 5);
        expect(myFighter.currentHP).toEqual(7);
    });
    test('should add the physicalDmgBonus to the physical attack()', () => {
        myFighter.physicalDmgBonus = 3;
        expect(myFighter.physicalAttack(slime)).toEqual(6);
    });
    test('should add the mentalDmgBonus to the mental attack()', () => {
        myFighter.mentalDmgBonus = 3;
        expect(myFighter.mentalAttack(slime)).toEqual(5);
    });
    test('should subtract the physicalDefBonus from the physical attack()', () => {
        ;
        myFighter.physicalDefBonus = 3;
        expect(slime.attack(myFighter, "physical", 8)).toEqual(2);
    });
    test('should subtract the mentalDefBonus from the mental attack()', () => {
        ;
        myFighter.mentalDefBonus = 3;
        expect(slime.attack(myFighter, "mental", 8)).toEqual(3);
    });
});

describe('Roles', () => {
    let myFighter;

    beforeEach(() => {
        myFighter = new Character("Trog");
        myFighter.chooseRole("warrior")
    });

    test('it should create a new character and apply role.', () => {
        expect(myFighter.role).toEqual("warrior");
    })

    test('it should enable base skills to be true based on roleSelect().', () => {
        expect((myFighter.inventory).skills.climb).toEqual(true)
        console.log(myFighter)
    })
})
