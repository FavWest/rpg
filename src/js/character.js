import Inventory from "./inventory.js";
import db_roles from "./roles.js";

export default class Character {

    constructor(name, role, level, physical, mental, hp, inventory) { //should be able to pass in the value of the character and have it pull stats from roles. e.g. Character("warrior")
        this.name = name;
        this.role = role;
        this.level = 1;
        this.physical = physical;
        this.mental = mental;
        this.currentHP = hp;
        this.maxHP = hp;
        this.inventory = new Inventory();
        this.physicalDefBonus = 0;
        this.mentalDefBonus = 0;
        this.physicalDmgBonus = 0;
        this.mentalDmgBonus = 0;
    }

    physicalAttack() {
        let damage = this.physical + this.physicalDmgBonus; // + this.physicalDmgBonus
        //this.attack(target, "physical", damage);
        return damage;
    }

    mentalAttack() {
        let damage = this.mental + this.mentalDmgBonus;
        return damage;
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
        if (attackType === "physical") {
            damage -= target.physical + target.physicalDefBonus; // + target.physicalDefBonus
        } else {
            damage -= target.mental + target.mentalDefBonus; // + target.mentalDefBonus
        }
        target.lowerCurrentHP(damage);
        return damage;
    }

    chooseRole(roleSelect) {
        const db = db_roles
        for (let i = 0; i < db.length; i++) {
            let currentRole = db[i];
            if (currentRole.role === roleSelect) {
                this.role = roleSelect;
                this.physical = currentRole.physical;
                this.mental = currentRole.mental;
                this.currentHP = currentRole.currentHP;
                this.maxHP = currentRole.maxHP;
                this.physicalDefBonus = currentRole.physicalDefBonus;
                this.mentalDefBonus = currentRole.mentalDefBonus;
                this.physicalDmgBonus = currentRole.physicalDmgBonus;
                this.mentalDmgBonus = currentRole.mentalDmgBonus;
                break
            }
        }
    }
};
//when new Character is created, it should pull the default settings from the roles.js file and should also create a new Inventory object from Inventory.js constructor.

//choose what type of character you want i.e. warrior, mage, rougue etc and it will populate the default stats listed from roles.jsfindItem(database, itemName) {
