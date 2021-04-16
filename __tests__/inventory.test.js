import Inventory from './../src/js/inventory.js'

import db_armor from './../src/js/armor.js'

describe('Inventory', () => {
    test("it should create a new inventory object with all skills set to false.", () => {
        const newInventory = new Inventory();
        expect(newInventory.skills.swim).toEqual(false);
        expect(newInventory.skills.climb).toEqual(false);
    });
    test("it should enable a skill", () => {
        const newInventory = new Inventory();
        expect(newInventory.enableSkill("swim"));
        expect(newInventory.skills.swim).toEqual(true);
        expect(newInventory.skills.climb).toEqual(false);
    });
    test("It should disable a skill", () => {
        const newInventory = new Inventory();
        expect(newInventory.enableSkill("swim"));
        expect(newInventory.disableSkill("swim"));
        expect(newInventory.skills.swim).toEqual(false);
    });
    test("it should check to see what the value of the skill is before changing it.", () => {
        const newInventory = new Inventory();
        expect(newInventory.toggleSkill("swim"));
        expect(newInventory.skills.swim).toEqual(true);
    });
    test("it should check to see what the value of the skill is before changing it.", () => {
        const newInventory = new Inventory();
        expect(newInventory.toggleSkill("swim"));
        expect(newInventory.toggleSkill("swim"));
        expect(newInventory.skills.swim).toEqual(false);
    });
    test("it should push an armor type into the armorArray", () => {
        const newInventory = new Inventory();
        const armorItem = { type: "armor" };
        expect(newInventory.acquireItem(armorItem));
        expect((newInventory.armor).includes(armorItem)).toEqual(true);
    });
    test("it should return a searched 'armor' item's 'name' property", () => {
        const newInventory = new Inventory();
        const armorItem = newInventory.findItem(db_armor, "Yearning Bone Battleplate");
        expect(armorItem.name).toEqual("Yearning Bone Battleplate");
    });
    test("it should push a searched 'armor' item into the player's inventory", () => {
        const newInventory = new Inventory();
        const armorItem = newInventory.findItem(db_armor, "Yearning Bone Battleplate");
        expect(newInventory.acquireItem(armorItem));
        expect(newInventory.armor[0].name).toEqual("Yearning Bone Battleplate");
    });
    test("it should push a weapon type to the weaponArray", () => {
        const newInventory = new Inventory();
        const weaponItem = { type: "weapon" };
        expect(newInventory.acquireItem(weaponItem));
        expect((newInventory.weapon).includes(weaponItem)).toEqual(true);
    });
    test("it should push a consumable type to the consumablesArray", () => {
        const newInventory = new Inventory();
        const consumableItem = { type: "consumables" };
        expect(newInventory.acquireItem(consumableItem));
        expect((newInventory.consumables).includes(consumableItem)).toEqual(true);
    });
});