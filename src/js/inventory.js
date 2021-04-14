export default class Inventory {
    constructor(skills, armor, weapons, consumables) {
        this.skills = { skills };
        this.armor = armor;
        this.weapons = weapons;
        this.consumables = consumables;
    }
}

// this.skills = {an empty object that will take string values and set them to either true or false depending on item.}
// every key value within Inventory will be another oject with preset key values that we can change to either true or false whether or not we have that item/ability.
// key values will be arrays that can be accessed once a player obtains that stat/item