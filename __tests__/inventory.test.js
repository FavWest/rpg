import Inventory from './../src/js/inventory.js'

describe('Inventory', () => {
    test("it should create a new inventory object with the users input.", () => {
        const newInventory = new Inventory("swim", "leather wraps", "broadsword", "potion");
        expect(newInventory.skills).toEqual("swim");
        expect(newInventory.armor).toEqual("leather wraps");
        expect(newInventory.weapons).toEqual("broadsword");
        expect(newInventory.consumables).toEqual("potion");

    });
});