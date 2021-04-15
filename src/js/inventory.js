import ARMOR from './armor.js';

export default class Inventory {
    constructor(skills, armor, weapons, consumables) {
        this.skills = {
            swim: false,
            climb: false,
            stealth: false,
            steal: false,
            "dual wield": false,
            fly: false,
            intimidate: false,
            diplomacy: false,
            acrobatics: false,
            perception: false,
            heal: false
        };
        this.armor = [];
        this.weapons = [];
        this.consumables = [];
    }
    enableSkill(skillName) {
        this.skills[skillName] = true;
    }
    disableSkill(skillName) {
        this.skills[skillName] = false;
    }
    toggleSkill(skillName) {
        if (this.skills[skillName] === true) {
            this.skills[skillName] = false;
        } else {
            this.skills[skillName] = true;
        };
    };
    acquireItem(item) {
        let armorArray = this.armor; // sets "armorArray" to a property on the character
        let weaponArray = this.weapons;
        let consumablesArray = this.consumables;
        if (item.type === "armor") {
            armorArray.push(item);
        } else if (item.type === "weapon") {
            weaponArray.push(item);
        } else {
            consumablesArray.push(item);
        }
        this.armor = armorArray;
        this.weapon = weaponArray;
        this.consumables = consumablesArray;
    };
    findItem(database, itemName) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].name == itemName) {
                //do cool stuff
                return database[i].name;
            } else {
                return "too bad!";
            }
        }
    }
};

//testytest
//chestPlate {
//type: armor
//class: warrior
//dual-wield: false
//value: 5
// }

//playerInventory(consumables[], ammunition[], )
//playerEqupment(armorSet[],weaponSlots[], ringSlots[])

// this.skills = {an empty object that will take string values and set them to either true or false depending on item.}
// every key value within Inventory will be another oject with preset key values that we can change to either true or false whether or not we have that item/ability.
// key values will be arrays that can be accessed once a player obtains that stat/item
// e.g., check if player has skill "swim" -- yes: can cross water, no: water is a boundary
//
// What's in a skill?
// Just a string, which acts as a keyword
// Since we can have multiple skills (swim, climb, stealth, etc.) they should be true/false properties in the skills object: if (character.Inventory.skills.swim === true) { //do stuff };
// skills {
    // swim: true,
    // climb: false,
    // stealth: false
// }
//armor will be an array of items that can be removed and added as items are used and replaced.
//only certain classes of characters can utilze certain armor types.
//e.g. universal armor = everyone, mage armor = only mages.